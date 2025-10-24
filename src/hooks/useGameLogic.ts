import { useState, useCallback } from 'react';
import type { GameMode, GameState} from "../types/GameLogicTypes.ts";

const initialGameState: GameState = {
  player1: { id: 'player1', name: 'Joueur 1', score: 0 },
  player2: { id: 'player2', name: 'Ordinateur', score: 0 },
  mode: 'pvc',
  currentRound: {
    player1Choice: null,
    player2Choice: null,
    result: null,
  },
  isGameActive: false,
  roundHistory: [],
};

export const useGame = () => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const startGame = useCallback((mode: GameMode, player1Name: string, player2Name?: string) => {
    setGameState(prev => ({
      ...prev,
      mode,
      player1: { ...prev.player1, name: player1Name, score: 0 },
      player2: { 
        ...prev.player2, 
        name: mode === 'pvc' ? 'Ordinateur' : player2Name || 'Joueur 2',
        score: 0 
      },
      isGameActive: true,
      roundHistory: [],
      currentRound: {
        player1Choice: null,
        player2Choice: null,
        result: null,
      },
    }));
  }, []);


  return {
    gameState,
    startGame
  };
};
