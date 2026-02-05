import { PrayerLink } from './PrayerModal';
import { useNovenaProgress } from '@/hooks/useNovenaProgress';
import type { Decade } from '@/data/prayers';
import { COMMON_PRAYERS } from '@/data/prayers';
import { COMMON_PRAYERS_ML } from '@/data/prayers-ml';

interface MysteryDecadeProps {
    decade: Decade;
    index: number;
}

export function MysteryDecade({ decade, index }: MysteryDecadeProps) {
    const { state } = useNovenaProgress();
    const isMl = state.settings.language === 'ml';
    const prayers = isMl ? COMMON_PRAYERS_ML : COMMON_PRAYERS;

    const getPrayerName = (id: string, defaultName: string) => {
        return prayers.find(p => p.id === id)?.name || defaultName;
    };

    return (
        <section className="space-y-4 border-l-2 border-primary/20 pl-4 py-2">
            <h3 className="font-bold text-lg text-primary">{index + 1}. {decade.name}</h3>
            <p className="text-sm font-sans font-medium text-muted-foreground uppercase tracking-wide">
                {isMl ? 'ഫലം' : 'Fruit'}: {decade.fruit}
            </p>
            {/* Bible Verse */}
            <blockquote className="border-l-2 border-amber-500/50 pl-3 py-1 bg-amber-50/50 dark:bg-amber-950/20 rounded-r-lg">
                <p className="italic text-sm leading-relaxed">"{decade.verse}"</p>
                <cite className="text-xs font-medium text-amber-700 dark:text-amber-400 not-italic">— {decade.reference}</cite>
            </blockquote>
            <div className="flex flex-wrap gap-2">
                <PrayerLink prayerId="our-father">{getPrayerName('our-father', 'Our Father')}</PrayerLink>
                <PrayerLink prayerId="hail-mary">10 x {getPrayerName('hail-mary', 'Hail Mary')}</PrayerLink>
                <PrayerLink prayerId="glory-be">{getPrayerName('glory-be', 'Glory Be')}</PrayerLink>
                <PrayerLink prayerId="fatima-prayer">{getPrayerName('fatima-prayer', 'O My Jesus')}</PrayerLink>
            </div>
            <div className="bg-muted/30 p-4 rounded-lg">
                <p className="font-medium text-sm text-primary mb-1">{isMl ? 'നൊവേന പ്രാർത്ഥന' : 'Novena Prayer'}:</p>
                <p>"{decade.prayer}"</p>
            </div>
        </section>
    );
}
