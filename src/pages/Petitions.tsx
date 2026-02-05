import { PetitionsList } from '../components/PetitionsList';
import { useNovenaProgress } from '../hooks/useNovenaProgress';

export function Petitions() {
    const { state } = useNovenaProgress();
    const isMl = state.settings.language === 'ml';

    const t = {
        title: isMl ? 'എന്റെ നിയോഗങ്ങൾ' : 'My Intentions',
        quote: isMl ? '"ചോദിക്കുവിൻ, നിങ്ങൾക്ക് ലഭിക്കും; അന്വേഷിക്കുവിൻ, നിങ്ങൾ കണ്ടെത്തും; മുട്ടുവിൻ, നിങ്ങൾക്ക് തുറന്നുകിട്ടും."' : '"Ask and it will be given to you; seek and you will find; knock and the door will be opened to you."',
        verse: isMl ? '- മത്തായി 7:7' : '- Matthew 7:7'
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-center">{t.title}</h1>
            <p className="text-muted-foreground text-center">
                {t.quote} <span className="text-xs block mt-1">{t.verse}</span>
            </p>
            <PetitionsList />
        </div>
    );
}
