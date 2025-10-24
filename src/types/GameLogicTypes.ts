export type Choice = 'rock' | 'paper' | 'scissors' | null;
export type GameMode = 'pvp' | 'pvc';
export type GameResult = 'win' | 'lose' | 'draw';

export interface Player {
    id: string;
    name: string;
    score: number;
}

export interface GameState {
    player1: Player;
    player2: Player;
    mode: GameMode;
    currentRound: {
        player1Choice: Choice;
        player2Choice: Choice;
        result: GameResult | null;
    };
    isGameActive: boolean;
    roundHistory: GameRound[];
}

export interface GameRound {
    id: string;
    player1Choice: Choice;
    player2Choice: Choice;
    winner: string | null;
    timestamp: Date;
}


