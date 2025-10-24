import { useState, useCallback } from 'react';
import { determineWinner, getRandomChoice } from '../utils/gameLogic';
import type {Choice, GameMode, GameRound, GameState} from "../types/GameLogicTypes.ts";

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

  const makeChoice = useCallback((playerId: string, choice: Choice) => {
    setGameState(prev => {
      const newState = { ...prev };

      if (playerId === 'player1') {
        newState.currentRound.player1Choice = choice;

        // En mode PvC, l'ordinateur joue automatiquement
        if (prev.mode === 'pvc') {
          newState.currentRound.player2Choice = getRandomChoice();
        }
      } else {
        newState.currentRound.player2Choice = choice;
      }

      // Si les deux joueurs ont joué, calculer le résultat
      if (newState.currentRound.player1Choice && newState.currentRound.player2Choice) {
        const result = determineWinner(
          newState.currentRound.player1Choice,
          newState.currentRound.player2Choice
        );

        newState.currentRound.result = result;

        // Mettre à jour les scores
        if (result === 'win') {
          newState.player1.score++;
        } else if (result === 'lose') {
          newState.player2.score++;
        }

        // Ajouter à l'historique
        const roundRecord: GameRound = {
          id: Date.now().toString(),
          player1Choice: newState.currentRound.player1Choice,
          player2Choice: newState.currentRound.player2Choice,
          winner: result === 'draw' ? null : (result === 'win' ? newState.player1.id : newState.player2.id),
          timestamp: new Date(),
        };

        newState.roundHistory.unshift(roundRecord);
      }

      return newState;
    });
  }, []);


  const updatePlayerName = useCallback((playerId: string, name: string) => {
    setGameState(prev => ({
      ...prev,
      [playerId]: { ...prev[playerId as keyof typeof prev], name },
    }));
  }, []);

  return {
    gameState,
    startGame,
    makeChoice,
    updatePlayerName,
  };
};
