import type { MysteryType } from '../data/prayers';

export const MYSTERY_INFO = {
    Joyful: {
        abbrev: 'J',
        color: 'bg-yellow-500/20 text-yellow-600 dark:text-yellow-400',
        name: 'Joyful'
    },
    Luminous: {
        abbrev: 'L',
        color: 'bg-blue-500/20 text-blue-600 dark:text-blue-400',
        name: 'Luminous'
    },
    Sorrowful: {
        abbrev: 'S',
        color: 'bg-red-500/20 text-red-600 dark:text-red-400',
        name: 'Sorrowful'
    },
    Glorious: {
        abbrev: 'G',
        color: 'bg-slate-300/30 text-slate-600 dark:text-slate-300',
        name: 'Glorious'
    },
} as const;

export function getMysteryTypeForDay(day: number, includeLuminous: boolean): MysteryType {
    const cycle = includeLuminous
        ? (['Joyful', 'Sorrowful', 'Glorious', 'Luminous'] as const)
        : (['Joyful', 'Sorrowful', 'Glorious'] as const);

    return cycle[(day - 1) % cycle.length];
}

export function getMysteryInfoForDay(day: number, includeLuminous: boolean) {
    const type = getMysteryTypeForDay(day, includeLuminous);
    return MYSTERY_INFO[type];
}

export function getPhaseForDay(day: number): 'Petition' | 'Thanksgiving' {
    return day <= 27 ? 'Petition' : 'Thanksgiving';
}
