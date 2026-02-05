import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { COMMON_PRAYERS } from '@/data/prayers';
import { COMMON_PRAYERS_ML } from '@/data/prayers-ml';
import { usePrayerModal } from '@/components/PrayerModal';
import { useNovenaProgress } from '@/hooks/useNovenaProgress';

export function Prayers() {
    const { openPrayer } = usePrayerModal();
    const { state } = useNovenaProgress();

    const isMl = state.settings.language === 'ml';
    const prayers = isMl ? COMMON_PRAYERS_ML : COMMON_PRAYERS;

    const t = {
        title: isMl ? 'പ്രാർത്ഥനകൾ' : 'Prayers',
        subtitle: isMl ? 'പൂർണ്ണരൂപം കാണാൻ കാർഡിൽ തൊടുക' : 'Tap a prayer card to view the full text'
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-center">{t.title}</h1>
            <p className="text-center text-muted-foreground text-sm">
                {t.subtitle}
            </p>

            <div className="grid grid-cols-2 gap-3">
                {prayers.map((prayer) => (
                    <Card
                        key={prayer.id}
                        className="cursor-pointer hover:bg-accent/50 transition-colors active:scale-95"
                        onClick={() => openPrayer(prayer.id)}
                    >
                        <CardHeader className="p-4 pb-2">
                            <CardTitle className="text-sm font-semibold leading-tight">
                                {prayer.name}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                            <p className="text-xs text-muted-foreground line-clamp-2">
                                {prayer.text.substring(0, 70)}...
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
