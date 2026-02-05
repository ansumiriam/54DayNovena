import { describe, it, expect } from 'vitest';
import { getMysteryTypeForDay, getPhaseForDay, getMysteryInfoForDay } from './novena-utils';

describe('novena-utils', () => {
    describe('getPhaseForDay', () => {
        it('should return "Petition" for days 1-27', () => {
            expect(getPhaseForDay(1)).toBe('Petition');
            expect(getPhaseForDay(27)).toBe('Petition');
        });

        it('should return "Thanksgiving" for days 28-54', () => {
            expect(getPhaseForDay(28)).toBe('Thanksgiving');
            expect(getPhaseForDay(54)).toBe('Thanksgiving');
        });
    });

    describe('getMysteryTypeForDay', () => {
        describe('without Luminous', () => {
            it('should follow Joyful -> Sorrowful -> Glorious cycle', () => {
                expect(getMysteryTypeForDay(1, false)).toBe('Joyful');
                expect(getMysteryTypeForDay(2, false)).toBe('Sorrowful');
                expect(getMysteryTypeForDay(3, false)).toBe('Glorious');
                expect(getMysteryTypeForDay(4, false)).toBe('Joyful');
            });
        });

        describe('with Luminous', () => {
            it('should follow Joyful -> Sorrowful -> Glorious -> Luminous cycle', () => {
                expect(getMysteryTypeForDay(1, true)).toBe('Joyful');
                expect(getMysteryTypeForDay(2, true)).toBe('Sorrowful');
                expect(getMysteryTypeForDay(3, true)).toBe('Glorious');
                expect(getMysteryTypeForDay(4, true)).toBe('Luminous');
                expect(getMysteryTypeForDay(5, true)).toBe('Joyful');
            });
        });
    });

    describe('getMysteryInfoForDay', () => {
        it('should return the correct mystery info object', () => {
            const info = getMysteryInfoForDay(1, false);
            expect(info.name).toBe('Joyful');
            expect(info.abbrev).toBe('J');
            expect(info.color).toContain('yellow');
        });

        it('should return Luminous info when cycle reaches 4th day with Luminous enabled', () => {
            const info = getMysteryInfoForDay(4, true);
            expect(info.name).toBe('Luminous');
            expect(info.abbrev).toBe('L');
            expect(info.color).toContain('blue');
        });
    });
});
