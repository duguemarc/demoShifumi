
import { describe, it, expect } from 'vitest';
import { determineWinner, getRandomChoice, getResultMessage } from './gameLogic.ts';

describe('gameLogic', () => {
  describe('determineWinner', () => {
    it('should return draw for same choices', () => {
      expect(determineWinner('rock', 'rock')).toBe('draw');
      expect(determineWinner('paper', 'paper')).toBe('draw');
      expect(determineWinner('scissors', 'scissors')).toBe('draw');
    });

    it('should return win when player1 wins', () => {
      expect(determineWinner('rock', 'scissors')).toBe('win');
      expect(determineWinner('paper', 'rock')).toBe('win');
      expect(determineWinner('scissors', 'paper')).toBe('win');
    });

    it('should return lose when player1 loses', () => {
      expect(determineWinner('scissors', 'rock')).toBe('lose');
      expect(determineWinner('rock', 'paper')).toBe('lose');
      expect(determineWinner('paper', 'scissors')).toBe('lose');
    });

    it('should throw error for null choices', () => {
      expect(() => determineWinner(null, 'rock')).toThrow();
      expect(() => determineWinner('rock', null)).toThrow();
      expect(() => determineWinner(null, null)).toThrow();
    });
  });

  describe('getRandomChoice', () => {
    it('should return a valid choice', () => {
      const choice = getRandomChoice();
      expect(['rock', 'paper', 'scissors']).toContain(choice);
    });

    it('should return different choices over multiple calls', () => {
      const choices = Array.from({ length: 100 }, () => getRandomChoice());
      const uniqueChoices = new Set(choices);
      expect(uniqueChoices.size).toBeGreaterThan(1);
    });
  });

  describe('getResultMessage', () => {
    it('should return correct messages for different results', () => {
      expect(getResultMessage('win', 'Alice')).toBe('Alice a gagné !');
      expect(getResultMessage('lose', 'Bob')).toBe('Bob a perdu !');
      expect(getResultMessage('draw', 'Charlie')).toBe('Égalité !');
    });
  });
});
