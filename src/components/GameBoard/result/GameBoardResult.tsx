import React from 'react';
import './style/GameBoardResult.scss';
import {CHOICE_LABELS, getResultMessage} from "../../../utils/gameLogic.ts";
import type {GameState} from "../../../types/GameLogicTypes.ts";

interface GameResultProps {
  gameState: GameState;
  onResetRound: () => void;
}

export const GameResult: React.FC<GameResultProps> = ({ gameState, onResetRound }) => {
  const { currentRound, player1, player2 } = gameState;
  
  if (!currentRound.player1Choice || !currentRound.player2Choice || !currentRound.result) {
    return null;
  }

  const resultMessage = getResultMessage(currentRound.result, player1.name);

  return (
    <div className="game-result">
      <div className="game-result__choices">
        <div className="game-result__choice">
          <h3 className="game-result__player-name">{player1.name}</h3>
          <div className="game-result__choice-display">
            {CHOICE_LABELS[currentRound.player1Choice]}
          </div>
        </div>

        <div className="game-result__vs">VS</div>

        <div className="game-result__choice">
          <h3 className="game-result__player-name">{player2.name}</h3>
          <div className="game-result__choice-display">
            {CHOICE_LABELS[currentRound.player2Choice]}
          </div>
        </div>
      </div>

      <div className={`game-result__message game-result__message--${currentRound.result}`}>
        {resultMessage}
      </div>

      <button onClick={onResetRound} className="game-result__next-round-button">
        Manche suivante
      </button>
    </div>
  );
};
