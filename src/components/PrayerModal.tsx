import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { COMMON_PRAYERS } from '@/data/prayers';
import { COMMON_PRAYERS_ML } from '@/data/prayers-ml';
import { useNovenaProgress } from '@/hooks/useNovenaProgress';
import type { CommonPrayer } from '@/data/prayers';

interface PrayerModalContextType {
    openPrayer: (prayerId: string) => void;
}

const PrayerModalContext = createContext<PrayerModalContextType | null>(null);

export function usePrayerModal() {
    const context = useContext(PrayerModalContext);
    if (!context) {
        throw new Error('usePrayerModal must be used within PrayerModalProvider');
    }
    return context;
}

export function PrayerModalProvider({ children }: { children: ReactNode }) {
    const [selectedPrayer, setSelectedPrayer] = useState<CommonPrayer | null>(null);
    const { state } = useNovenaProgress();

    const openPrayer = (prayerId: string) => {
        const prayers = state.settings.language === 'ml' ? COMMON_PRAYERS_ML : COMMON_PRAYERS;
        const prayer = prayers.find(p => p.id === prayerId);
        if (prayer) {
            setSelectedPrayer(prayer);
        }
    };

    return (
        <PrayerModalContext.Provider value={{ openPrayer }}>
            {children}

            {/* Global Prayer Modal */}
            <Dialog open={!!selectedPrayer} onOpenChange={() => setSelectedPrayer(null)}>
                <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold text-primary">
                            {selectedPrayer?.name}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="font-serif text-lg leading-relaxed whitespace-pre-wrap pt-4">
                        {selectedPrayer?.text}
                    </div>
                </DialogContent>
            </Dialog>
        </PrayerModalContext.Provider>
    );
}

// Helper component for clickable prayer links
export function PrayerLink({ prayerId, children }: { prayerId: string; children: ReactNode }) {
    const { openPrayer } = usePrayerModal();
    return (
        <button
            onClick={() => openPrayer(prayerId)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-sm font-medium 
                       bg-primary/10 text-primary border border-primary/20
                       hover:bg-primary/20 hover:border-primary/30
                       active:scale-95 transition-all duration-150"
        >
            <span className="text-xs">📿</span>
            {children}
        </button>
    );
}
