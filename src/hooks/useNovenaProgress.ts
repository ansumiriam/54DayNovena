import { useState, useEffect } from 'react';
import { MysteryType } from '../data/prayers';

export interface NovenaState {
    currentDay: number; // 1-54
    history: Record<number, string | null>; // day -> date string (ISO) or null
    startDate: string | null;
    petitions: string[];
    settings: {
        includeLuminous: boolean;
        theme: 'light' | 'dark' | 'system';
    };
}

const DEFAULT_STATE: NovenaState = {
    currentDay: 1,
    history: {},
    startDate: null,
    petitions: [],
    settings: {
        includeLuminous: false,
        theme: 'system',
    },
};

export function useNovenaProgress() {
    const [state, setState] = useState<NovenaState>(() => {
        const saved = localStorage.getItem('novena-state');
        return saved ? JSON.parse(saved) : DEFAULT_STATE;
    });

    useEffect(() => {
        localStorage.setItem('novena-state', JSON.stringify(state));
    }, [state]);

    const getPhase = (day: number): 'Petition' | 'Thanksgiving' => {
        return day <= 27 ? 'Petition' : 'Thanksgiving';
    };

    const getMystery = (day: number): MysteryType => {
        // 54 Day Novena Mystery Cycle:
        // Days 1-27 (Petition): Joyful, Sorrowful, Glorious (repeated)
        // Days 28-54 (Thanksgiving): Joyful, Sorrowful, Glorious (repeated)
        // Note: If Luminous is enabled, the cycle might change, but typically 54 day novena
        // strictly follows J-S-G. The "Luminous" option might just insert it into the rotation
        // e.g. J-L-S-G, making it a 72 day novena? Or just replacing one?
        // For now, sticking to the Implementation Plan:
        // Default: J -> S -> G
        // Luminous Option: J -> L -> S -> G (mod 4)

        const cycle = state.settings.includeLuminous
            ? ['Joyful', 'Luminous', 'Sorrowful', 'Glorious'] as const
            : ['Joyful', 'Sorrowful', 'Glorious'] as const;

        const cycleLength = cycle.length;
        // Day 1 = Index 0 (Joyful)
        const index = (day - 1) % cycleLength;
        return cycle[index];
    };

    const markDayComplete = () => {
        const todayStr = new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
        setState(prev => ({
            ...prev,
            history: { ...prev.history, [prev.currentDay]: todayStr },
            currentDay: Math.min(prev.currentDay + 1, 54), // Cap at 54? Or allow looping?
        }));
    };

    const resetNovena = () => {
        setState(prev => ({
            ...prev,
            currentDay: 1,
            history: {},
            startDate: new Date().toISOString(),
        }));
    };

    const addPetition = (text: string) => {
        setState(prev => ({ ...prev, petitions: [...prev.petitions, text] }));
    };

    const removePetition = (index: number) => {
        setState(prev => ({
            ...prev,
            petitions: prev.petitions.filter((_, i) => i !== index),
        }));
    };

    const resetPetitions = () => {
        setState(prev => ({ ...prev, petitions: [] }));
    };

    const toggleLuminous = () => {
        setState(prev => ({
            ...prev,
            settings: { ...prev.settings, includeLuminous: !prev.settings.includeLuminous }
        }));
    }

    return {
        state,
        currentPhase: getPhase(state.currentDay),
        todayMystery: getMystery(state.currentDay),
        markDayComplete,
        resetNovena,
        addPetition,
        removePetition,
        resetPetitions,
        toggleLuminous
    };
}
