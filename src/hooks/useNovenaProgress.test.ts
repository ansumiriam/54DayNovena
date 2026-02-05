import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import { useNovenaProgress } from './useNovenaProgress';

describe('useNovenaProgress', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it('should initialize with default state', () => {
        const { result } = renderHook(() => useNovenaProgress());
        expect(result.current.state.currentDay).toBe(1);
        expect(result.current.state.settings.includeLuminous).toBe(false);
    });

    it('should mark day complete and advance currentDay', () => {
        const { result } = renderHook(() => useNovenaProgress());

        act(() => {
            result.current.markDayComplete();
        });

        expect(result.current.state.currentDay).toBe(2);
        expect(result.current.state.history[1]).toBeDefined();
    });

    it('should toggle luminous setting', () => {
        const { result } = renderHook(() => useNovenaProgress());

        act(() => {
            result.current.toggleLuminous();
        });

        expect(result.current.state.settings.includeLuminous).toBe(true);
    });

    it('should add and remove petitions', () => {
        const { result } = renderHook(() => useNovenaProgress());

        act(() => {
            result.current.addPetition('Test Petition');
        });

        expect(result.current.state.petitions).toContain('Test Petition');

        act(() => {
            result.current.removePetition(0);
        });

        expect(result.current.state.petitions).not.toContain('Test Petition');
    });

    it('should reset novena', () => {
        const { result } = renderHook(() => useNovenaProgress());

        act(() => {
            result.current.markDayComplete();
            result.current.resetNovena();
        });

        expect(result.current.state.currentDay).toBe(1);
        expect(Object.keys(result.current.state.history).length).toBe(0);
    });
});
