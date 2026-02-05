import { useNavigate } from 'react-router-dom';
import { useNovenaProgress } from '@/hooks/useNovenaProgress';
import { NOVENA_DATA, COMMON_PRAYERS } from '../data/prayers';
import type { MysteryType } from '../data/prayers';
import { NOVENA_DATA_ML, COMMON_PRAYERS_ML } from '../data/prayers-ml';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PrayerLink } from '@/components/PrayerModal';
import { MysteryDecade } from '@/components/MysteryDecade';
import { ArrowLeft, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export function PrayerReader() {
    const navigate = useNavigate();
    const { state, currentPhase, todayMystery, markDayComplete } = useNovenaProgress();
    const isMl = state.settings.language === 'ml';
    const currentData = isMl ? NOVENA_DATA_ML : NOVENA_DATA;
    const commonPrayers = isMl ? COMMON_PRAYERS_ML : COMMON_PRAYERS;

    // Cast todayMystery to MysteryType to satisfy TypeScript index signature
    const mysteryType = todayMystery as MysteryType;
    const mysteryData = currentData.mysteries[mysteryType];
    const mysteryPrayers = currentData.mysteryPrayers[mysteryType];
    const phaseKey = currentPhase === 'Petition' ? 'petition' : 'thanksgiving';

    const t = {
        phase: isMl ? (currentPhase === 'Petition' ? 'അപേക്ഷ' : 'കൃതജ്ഞത') : currentPhase,
        mysteries: isMl ? 'രഹസ്യങ്ങൾ' : 'Mysteries',
        openingHeader: isMl ? 'നൊവേന പ്രാരംഭ പ്രാർത്ഥന' : 'Novena Opening Prayer',
        rosaryHeader: isMl ? 'ജപമാല പ്രാർത്ഥനകൾ' : 'Rosary Prayers',
        nowPray: isMl ? 'ഇപ്പോൾ പ്രാർത്ഥിക്കുക:' : 'Now pray:',
        closingHeader: isMl ? 'സമാപന പ്രാർത്ഥനകൾ' : 'Closing Prayers',
        novenaClosingHeader: isMl ? 'നൊവേന സമാപന പ്രാർത്ഥന' : 'Novena Closing Prayer',
        completeButton: isMl ? 'ദിവസം പൂർത്തിയാക്കുക' : 'Complete Day',
        hailMaryCount: isMl ? '3 x' : '3',
        phaseLabel: isMl ? 'ഘട്ടം' : 'Phase',
    };

    const getPrayerName = (id: string, defaultName: string) => {
        return commonPrayers.find(p => p.id === id)?.name || defaultName;
    };

    const handleComplete = () => {
        markDayComplete();
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        navigate('/');
    };

    return (
        <div className="fixed inset-0 bg-background z-50 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur">
                <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <div className="text-center">
                    <h2 className="font-semibold text-lg">{t.phase} {t.phaseLabel}</h2>
                    <p className="text-xs text-muted-foreground">{mysteryData.name} {t.mysteries}</p>
                </div>
                <div className="w-9" /> {/* Spacer */}
            </div>

            {/* Content */}
            <ScrollArea className="flex-1 p-6">
                <div className="max-w-2xl mx-auto space-y-8 pb-20 font-serif leading-relaxed text-lg">

                    {/* Novena Opening Prayer */}
                    <section className="space-y-4">
                        <h3 className="font-bold text-xl text-primary">{t.openingHeader}</h3>
                        <p className="whitespace-pre-wrap">{mysteryPrayers.opening[phaseKey]}</p>
                    </section>

                    {/* Intro Prayers */}
                    <section className="space-y-4">
                        <h3 className="font-bold text-xl text-primary">{t.rosaryHeader}</h3>
                        <p className="text-sm italic text-muted-foreground">{t.nowPray}</p>
                        <div className="flex flex-wrap gap-2">
                            <PrayerLink prayerId="sign-of-cross">{getPrayerName('sign-of-cross', 'Sign of the Cross')}</PrayerLink>
                            <PrayerLink prayerId="apostles-creed">{getPrayerName('apostles-creed', "Apostles' Creed")}</PrayerLink>
                            <PrayerLink prayerId="our-father">{getPrayerName('our-father', 'Our Father')}</PrayerLink>
                            <PrayerLink prayerId="hail-mary">{t.hailMaryCount} {getPrayerName('hail-mary', 'Hail Marys')}</PrayerLink>
                            <PrayerLink prayerId="glory-be">{getPrayerName('glory-be', 'Glory Be')}</PrayerLink>
                        </div>
                    </section>

                    {/* Mysteries */}
                    {mysteryData.decades.map((decade, index) => (
                        <MysteryDecade key={index} decade={decade} index={index} />
                    ))}

                    {/* Closing Prayers */}
                    <section className="space-y-4">
                        <h3 className="font-bold text-xl text-primary">{t.closingHeader}</h3>
                        <p className="text-sm italic text-muted-foreground">{t.nowPray}</p>
                        <div className="flex flex-wrap gap-2">
                            <PrayerLink prayerId="hail-holy-queen">{getPrayerName('hail-holy-queen', 'Hail Holy Queen')}</PrayerLink>
                            <PrayerLink prayerId="rosary-prayer">{getPrayerName('rosary-prayer', 'Prayer After the Rosary')}</PrayerLink>
                        </div>
                    </section>

                    {/* Novena Closing Prayer */}
                    <section className="space-y-4">
                        <h3 className="font-bold text-xl text-primary">{t.novenaClosingHeader}</h3>
                        <p className="whitespace-pre-wrap">{mysteryPrayers.closing[phaseKey]}</p>
                    </section>

                </div>
            </ScrollArea>

            {/* Footer */}
            <div className="p-4 border-t bg-background">
                <Button size="lg" className="w-full text-lg h-14" onClick={handleComplete}>
                    <Check className="mr-2 h-5 w-5" /> {t.completeButton} {state.currentDay}
                </Button>
            </div>
        </div>
    );
}
