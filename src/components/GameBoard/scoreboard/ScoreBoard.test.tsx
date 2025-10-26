import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {ScoreBoard} from "./ScoreBoard.tsx";
import type {Player} from "../../../types/GameLogicTypes.ts";
import '@testing-library/jest-dom';

describe('ScoreBoard', () => {
  const player1: Player = { id: 'player1', name: 'Alice', score: 3 };
  const player2: Player = { id: 'player2', name: 'Bob', score: 1 };

  it('renders player names correctly', () => {
    render(<ScoreBoard player1={player1} player2={player2} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });

  it('renders scores correctly', () => {
    render(<ScoreBoard player1={player1} player2={player2} />);
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('renders separator', () => {
    render(<ScoreBoard player1={player1} player2={player2} />);
    expect(screen.getByText('-')).toBeInTheDocument();
  });
});
