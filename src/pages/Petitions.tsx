import { PetitionsList } from '../components/PetitionsList';

export function Petitions() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-center">My Intentions</h1>
            <p className="text-muted-foreground text-center">
                "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you." <span className="text-xs block mt-1">- Matthew 7:7</span>
            </p>
            <PetitionsList />
        </div>
    );
}
