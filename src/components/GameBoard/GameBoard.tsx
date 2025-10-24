import React from 'react';
import { CHOICES } from '../../utils/gameLogic';
import './style/GameBoard.scss';
import type {Choice, GameState} from "../../types/GameLogicTypes.ts";
import {ChoiceButton} from "../common/ChoiceButton.tsx";

interface GameBoardProps {
    gameState: GameState;
    onMakeChoice: (playerId: string, choice: Choice) => void;
}

export const GameBoard: React.FC<GameBoardProps> = ({
                                                        gameState,
                                                        onMakeChoice,
                                                    }) => {
    const { mode, currentRound, player1, player2 } = gameState;
    const isPlayer2Turn = mode === 'pvp' && currentRound.player1Choice && !currentRound.player2Choice;
    const showResult = currentRound.player1Choice && currentRound.player2Choice;

    const handlePlayer1Choice = (choice: Choice) => {
        if (!currentRound.player1Choice) {
            onMakeChoice('player1', choice);
        }
    };

    const handlePlayer2Choice = (choice: Choice) => {
        if (mode === 'pvp' && !currentRound.player2Choice && currentRound.player1Choice) {
            onMakeChoice('player2', choice);
        }
    };

    return (
        <div className="game-board">
        <div className="game-board__header">
    </div>

    <div className="game-board__content">
        {showResult ? (
            <div>Résultat</div>
) : (
        <>
            <div className="game-board__player-section">
        <h3 className="game-board__player-name">{player1.name}</h3>
            <div className="game-board__choices">
        {CHOICES.map((choice) => (
                <ChoiceButton
                    key={choice}
            choice={choice!}
            onClick={() => handlePlayer1Choice(choice)}
    disabled={!!currentRound.player1Choice}
    isSelected={currentRound.player1Choice === choice}
    />
))}
    </div>
    {currentRound.player1Choice && (
        <div className="game-board__choice-made">Choix effectué !</div>
    )}
    </div>

    {mode === 'pvp' && (
        <div className="game-board__vs">VS</div>
    )}

    {mode === 'pvp' && (
        <div className="game-board__player-section">
        <h3 className="game-board__player-name">{player2.name}</h3>
            <div className="game-board__choices">
        {CHOICES.map((choice) => (
                <ChoiceButton
                    key={choice}
            choice={choice!}
            onClick={() => handlePlayer2Choice(choice)}
        disabled={!isPlayer2Turn || !!currentRound.player2Choice}
        isSelected={currentRound.player2Choice === choice}
        />
    ))}
        </div>
        {currentRound.player2Choice && (
            <div className="game-board__choice-made">Choix effectué !</div>
        )}
        {isPlayer2Turn && (
            <div className="game-board__turn-indicator">À votre tour !</div>
        )}
        </div>
    )}

    {mode === 'pvc' && currentRound.player1Choice && (
        <div className="game-board__computer-thinking">
            L'ordinateur réfléchit...
    </div>
    )}
    </>
)}
    </div>
    </div>
);
};