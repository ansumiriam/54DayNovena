import { useState, useEffect, createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { getPhaseForDay, getMysteryTypeForDay } from '../lib/novena-utils';

export interface NovenaState {
    currentDay: number; // 1-54
    history: Record<number, string | null>; // day -> date string (ISO) or null
    startDate: string | null;
    petitions: string[];
    settings: {
        includeLuminous: boolean;
        theme: 'light' | 'dark' | 'system';
        language: 'en' | 'ml';
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
        language: 'en',
    },
};

interface NovenaContextType {
    state: NovenaState;
    currentPhase: string;
    todayMystery: string;
    markDayComplete: () => void;
    resetNovena: () => void;
    addPetition: (text: string) => void;
    removePetition: (index: number) => void;
    resetPetitions: () => void;
    toggleLuminous: () => void;
    toggleLanguage: (lang: 'en' | 'ml') => void;
}

const NovenaContext = createContext<NovenaContextType | null>(null);

export function NovenaProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<NovenaState>(() => {
        const saved = localStorage.getItem('novena-state');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Ensure language setting exists for existing users
                if (!parsed.settings.language) {
                    parsed.settings.language = 'en';
                }
                return parsed;
            } catch (e) {
                console.error("Failed to parse novena state", e);
                return DEFAULT_STATE;
            }
        }
        return DEFAULT_STATE;
    });

    useEffect(() => {
        localStorage.setItem('novena-state', JSON.stringify(state));
    }, [state]);

    const markDayComplete = () => {
        const todayStr = new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
        setState(prev => ({
            ...prev,
            history: { ...prev.history, [prev.currentDay]: todayStr },
            currentDay: Math.min(prev.currentDay + 1, 54),
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

    const toggleLanguage = (lang: 'en' | 'ml') => {
        setState(prev => ({
            ...prev,
            settings: { ...prev.settings, language: lang }
        }));
    }

    const value = {
        state,
        currentPhase: getPhaseForDay(state.currentDay),
        todayMystery: getMysteryTypeForDay(state.currentDay, state.settings.includeLuminous),
        markDayComplete,
        resetNovena,
        addPetition,
        removePetition,
        resetPetitions,
        toggleLuminous,
        toggleLanguage
    };

    return (
        <NovenaContext.Provider value= { value } >
        { children }
        </NovenaContext.Provider>
    );
}

export function useNovenaProgress() {
    const context = useContext(NovenaContext);
    if (!context) {
        throw new Error('useNovenaProgress must be used within a NovenaProvider');
    }
    return context;
}
