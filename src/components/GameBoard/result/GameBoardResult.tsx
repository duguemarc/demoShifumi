import React from 'react';
import './style/GameBoardResult.scss';
import {getResultMessage} from "../../../utils/gameLogic.ts";
import type {GameState} from "../../../types/GameLogicTypes.ts";
import {RockIcon} from "../../common/icons/RockIcon.tsx";
import {PaperIcon} from "../../common/icons/PaperIcon.tsx";
import {ScissorsIcon} from "../../common/icons/ScissorsIcon.tsx";

interface GameResultProps {
  gameState: GameState;
  onResetRound: () => void;
}

export const GameResult: React.FC<GameResultProps> = ({ gameState, onResetRound }) => {
  const { currentRound, player1, player2 } = gameState;
  
  if (!currentRound.player1Choice || !currentRound.player2Choice || !currentRound.result) {
    return null;
  }

  const CHOICE_ICONS = {
        rock: RockIcon,
        paper: PaperIcon,
        scissors: ScissorsIcon,
    } as const;

    // Récupération des composants d'icônes
    const IconChoicePlayer1 = CHOICE_ICONS[currentRound.player1Choice];
    const IconChoicePlayer2 = CHOICE_ICONS[currentRound.player2Choice];


    const resultMessage = getResultMessage(currentRound.result, player1.name);

  return (
    <div className="game-result">
      <div className="game-result__choices">
        <div className="game-result__choice">
          <h3 className="game-result__player-name">{player1.name}</h3>
          <div className="game-result__choice-display">
              <IconChoicePlayer1/>
          </div>
        </div>

        <div className="game-result__vs">VS</div>

        <div className="game-result__choice">
          <h3 className="game-result__player-name">{player2.name}</h3>
          <div className="game-result__choice-display">
              <IconChoicePlayer2/>
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
