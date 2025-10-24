import type {Choice, GameResult} from "../types/GameLogicTypes.ts";

export const CHOICES: Choice[] = ['rock', 'paper', 'scissors'];

export const CHOICE_LABELS = {
  rock: '🪨 Pierre',
  paper: '📄 Papier',
  scissors: '✂️ Ciseaux',
};

export const getRandomChoice = (): Choice => {
  const choices: Choice[] = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
};

export const determineWinner = (player1Choice: Choice, player2Choice: Choice): GameResult => {
  if (!player1Choice || !player2Choice) {
    throw new Error('Both players must make a choice');
  }

  if (player1Choice === player2Choice) {
    return 'draw';
  }

  // Détermine le vainqueur
  const winningCombinations = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  return winningCombinations[player1Choice] === player2Choice ? 'win' : 'lose';
};

export const getResultMessage = (result: GameResult, playerName: string): string => {
  switch (result) {
    case 'win':
      return `🎉 ${playerName} gagne !`;
    case 'lose':
      return `😢 ${playerName} perd !`;
    case 'draw':
      return `🤝 Égalité !`;
    default:
      return '';
  }
};
