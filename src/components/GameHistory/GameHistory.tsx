import React from 'react';
import { CHOICE_LABELS } from '../../utils/gameLogic.ts';
import './style/GameHistory.scss';
import type {GameRound, Player} from "../../types/GameLogicTypes.ts";

interface GameHistoryProps {
  rounds: GameRound[];
  player1: Player;
  player2: Player;
  isVisible: boolean;
  onToggle: () => void;
}

export const GameHistory: React.FC<GameHistoryProps> = ({
  rounds,
  player1,
  player2,
  isVisible,
  onToggle,
}) => {
  if (rounds.length === 0) return null;

  const getWinnerName = (winnerId: string | null) => {
    if (!winnerId) return 'Égalité';
    return winnerId === player1.id ? player1.name : player2.name;
  };

  return (
    <div className="game-history">
      <button onClick={onToggle} className="game-history__toggle">
         {isVisible ? 'Masquer' : 'Afficher'} l'historique ({rounds.length})
      </button>

      {isVisible && (
        <div className="game-history__content">
          <h3 className="game-history__title">Historique des manches</h3>
          <div className="game-history__rounds">
            {rounds.map((round, index) => (
              <div key={round.id} className="game-history__round">
                <div className="game-history__round-number">
                  Manche {rounds.length - index}
                </div>
                <div className="game-history__choices">
                  <span className="game-history__choice">
                    {CHOICE_LABELS[round.player1Choice!]}
                  </span>
                  <span className="game-history__vs">vs</span>
                  <span className="game-history__choice">
                    {CHOICE_LABELS[round.player2Choice!]}
                  </span>
                </div>
                <div className={`game-history__winner ${round.winner ? '' : 'game-history__winner--draw'}`}>
                  {getWinnerName(round.winner)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
