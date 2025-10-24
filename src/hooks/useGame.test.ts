
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useGame } from './useGame.ts';

// Mock the getRandomChoice function
vi.mock('../../utils/gameLogic', async () => {
  const actual = await vi.importActual('../../utils/gameLogic');
  return {
    ...actual,
    getRandomChoice: vi.fn(() => 'scissors'),
  };
});

describe('useGame', () => {
  let hook: any;

  beforeEach(() => {
    const { result } = renderHook(() => useGame());
    hook = result;
  });

  it('should initialize with default state', () => {
    expect(hook.current.gameState.isGameActive).toBe(false);
    expect(hook.current.gameState.mode).toBe('pvc');
    expect(hook.current.gameState.player1.score).toBe(0);
    expect(hook.current.gameState.player2.score).toBe(0);
  });

  it('should start PvC game correctly', () => {
    act(() => {
      hook.current.startGame('pvc', 'Alice');
    });

    expect(hook.current.gameState.isGameActive).toBe(true);
    expect(hook.current.gameState.mode).toBe('pvc');
    expect(hook.current.gameState.player1.name).toBe('Alice');
    expect(hook.current.gameState.player2.name).toBe('Ordinateur');
  });

  it('should start PvP game correctly', () => {
    act(() => {
      hook.current.startGame('pvp', 'Alice', 'Bob');
    });

    expect(hook.current.gameState.isGameActive).toBe(true);
    expect(hook.current.gameState.mode).toBe('pvp');
    expect(hook.current.gameState.player1.name).toBe('Alice');
    expect(hook.current.gameState.player2.name).toBe('Bob');
  });

  it('should handle player choice in PvC mode', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.7); // Force scissors
    act(() => {
      hook.current.startGame('pvc', 'Alice');
    });

    act(() => {
      hook.current.makeChoice('player1', 'rock');
    });

    expect(hook.current.gameState.currentRound.player1Choice).toBe('rock');
    expect(hook.current.gameState.currentRound.player2Choice).toBe('scissors');
    expect(hook.current.gameState.currentRound.result).toBe('win');
    expect(hook.current.gameState.player1.score).toBe(1);
  });

  it('should reset round correctly', () => {
    act(() => {
      hook.current.startGame('pvc', 'Alice');
    });

    act(() => {
      hook.current.makeChoice('player1', 'rock');
    });

    act(() => {
      hook.current.resetRound();
    });

    expect(hook.current.gameState.currentRound.player1Choice).toBe(null);
    expect(hook.current.gameState.currentRound.player2Choice).toBe(null);
    expect(hook.current.gameState.currentRound.result).toBe(null);
  });

  it('should reset game correctly', () => {
    act(() => {
      hook.current.startGame('pvc', 'Alice');
    });

    act(() => {
      hook.current.makeChoice('player1', 'rock');
    });

    act(() => {
      hook.current.resetGame();
    });

    expect(hook.current.gameState.isGameActive).toBe(false);
    expect(hook.current.gameState.player1.score).toBe(0);
    expect(hook.current.gameState.player2.score).toBe(0);
    expect(hook.current.gameState.roundHistory).toHaveLength(0);
  });
});
