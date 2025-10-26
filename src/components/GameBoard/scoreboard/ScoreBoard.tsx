import React from 'react';
import './style/ScoreBoard.scss';
import type {Player} from "../../../types/GameLogicTypes.ts";

interface ScoreBoardProps {
  player1: Player;
  player2: Player;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ player1, player2 }) => {
  return (
    <div className="scoreboard">
      <div className="scoreboard__player">
        <div className="scoreboard__name">{player1.name}</div>
        <div className="scoreboard__score">{player1.score}</div>
      </div>
      
      <div className="scoreboard__separator">-</div>
      
      <div className="scoreboard__player">
        <div className="scoreboard__name">{player2.name}</div>
        <div className="scoreboard__score">{player2.score}</div>
      </div>
    </div>
  );
};
