import { useState } from 'react';
import { useNovenaProgress } from '../hooks/useNovenaProgress';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Trash2, Plus } from 'lucide-react';

export function PetitionsList() {
    const { state, addPetition, removePetition } = useNovenaProgress();
    const [newPetition, setNewPetition] = useState('');
    const isMl = state.settings.language === 'ml';

    const t = {
        title: isMl ? 'എന്റെ നിയോഗങ്ങൾ' : 'My Petitions',
        placeholder: isMl ? 'എന്റെ നിയോഗം...' : 'I am praying for...',
        empty: isMl ? 'നിയോഗങ്ങൾ ഒന്നും ചേർത്തിട്ടില്ല' : 'No petitions added yet.',
        disclaimer: isMl ? 'ഈ നിയോഗങ്ങൾ സ്വകാര്യമാണ്, നിങ്ങളുടെ ഫോണിൽ മാത്രമാണ് സൂക്ഷിക്കുന്നത്.' : 'These petitions are private and stored only on your device.'
    };

    const handleAdd = () => {
        if (newPetition.trim()) {
            addPetition(newPetition.trim());
            setNewPetition('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    }

    return (
        <div className="space-y-4 max-w-md mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>{t.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex space-x-2">
                        <Input
                            placeholder={t.placeholder}
                            value={newPetition}
                            onChange={(e) => setNewPetition(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <Button onClick={handleAdd} size="icon">
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="space-y-2">
                        {state.petitions.length === 0 && (
                            <p className="text-sm text-muted-foreground text-center py-4">
                                {t.empty}
                            </p>
                        )}
                        {state.petitions.map((petition, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-3 rounded-lg border bg-card text-card-foreground shadow-sm"
                            >
                                <span className="text-sm flex-1 mr-2">{petition}</span>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-destructive hover:text-destructive/90"
                                    onClick={() => removePetition(index)}
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            <p className="text-xs text-muted-foreground text-center px-4">
                {t.disclaimer}
            </p>
        </div>
    );
}
