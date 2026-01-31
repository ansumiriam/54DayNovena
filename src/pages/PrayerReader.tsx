import { useNavigate } from 'react-router-dom';
import { useNovenaProgress } from '@/hooks/useNovenaProgress';
import { NOVENA_DATA } from '../data/prayers';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowLeft, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export function PrayerReader() {
    const navigate = useNavigate();
    const { state, currentPhase, todayMystery, markDayComplete } = useNovenaProgress();
    const mysteryData = NOVENA_DATA.mysteries[todayMystery];

    const handleComplete = () => {
        markDayComplete();
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        navigate('/');
    };

    const getPhaseText = (type: 'opening' | 'closing') => {
        return currentPhase === 'Petition'
            ? NOVENA_DATA[type].petition
            : NOVENA_DATA[type].thanksgiving;
    };

    return (
        <div className="fixed inset-0 bg-background z-50 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur">
                <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <div className="text-center">
                    <h2 className="font-semibold text-lg">{currentPhase} Phase</h2>
                    <p className="text-xs text-muted-foreground">{todayMystery} Mysteries</p>
                </div>
                <div className="w-9" /> {/* Spacer */}
            </div>

            {/* Content */}
            <ScrollArea className="flex-1 p-6">
                <div className="max-w-2xl mx-auto space-y-8 pb-20 font-serif leading-relaxed text-lg">

                    {/* Opening */}
                    <section>
                        <h3 className="font-bold text-xl mb-4 text-primary">Opening Prayer</h3>
                        <p className="whitespace-pre-wrap">{getPhaseText('opening')}</p>
                    </section>

                    {/* Intro Prayers */}
                    <section className="text-base text-muted-foreground italic">
                        <p>(Pray the Apostles' Creed, Our Father, 3 Hail Marys, and Glory Be)</p>
                    </section>

                    {/* Mysteries */}
                    {mysteryData.decades.map((decade, index) => (
                        <section key={index} className="space-y-4 border-l-2 border-primary/20 pl-4 py-2">
                            <h3 className="font-bold text-lg text-primary">{index + 1}. {decade.name}</h3>
                            <p className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-wide">
                                Fruit: {decade.fruit}
                            </p>
                            <p className="text-base italic">
                                (Pray Our Father, 10 Hail Marys, Glory Be, O My Jesus)
                            </p>
                            <div className="bg-muted/30 p-4 rounded-lg">
                                <p className="font-medium text-sm text-primary mb-1">Novena Prayer:</p>
                                <p>"{decade.prayer}"</p>
                            </div>
                        </section>
                    ))}

                    {/* Hail Holy Queen */}
                    <section>
                        <h3 className="font-bold text-xl mb-4 text-primary">Hail Holy Queen</h3>
                        <p className="text-base italic">
                            (Pray the Hail Holy Queen)
                        </p>
                    </section>

                    {/* Closing */}
                    <section>
                        <h3 className="font-bold text-xl mb-4 text-primary">Closing Prayer</h3>
                        <p className="whitespace-pre-wrap">{getPhaseText('closing')}</p>
                    </section>

                </div>
            </ScrollArea>

            {/* Footer */}
            <div className="p-4 border-t bg-background">
                <Button size="lg" className="w-full text-lg h-14" onClick={handleComplete}>
                    <Check className="mr-2 h-5 w-5" /> Complete Day {state.currentDay}
                </Button>
            </div>
        </div>
    );
}
