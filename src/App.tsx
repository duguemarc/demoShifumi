import './App.css'
import {GameBoard} from "./components/GameBoard/GameBoard.tsx";
import {useGame} from "./hooks/useGame.ts";
import {GameSetup} from "./components/GameSetup/GameSetupComponent.tsx";
import type {GameMode} from "./types/GameLogicTypes.ts";
import {GameHistory} from "./components/GameHistory/GameHistory.tsx";
import {useState} from "react";

function App() {
    const { gameState, startGame, makeChoice, resetGame, resetRound } = useGame();
    const [showHistory, setShowHistory] = useState(false);

    const handleStartGame = (mode: GameMode, player1Name: string, player2Name?: string) => {
        startGame(mode, player1Name, player2Name);
    };


    if (!gameState.isGameActive) {
        return <GameSetup onStartGame={handleStartGame} />;
    }

    return (
        <div className="app">
            <GameBoard onResetGame={resetGame} onResetRound={resetRound} gameState={gameState} onMakeChoice={makeChoice} />
            <GameHistory
                rounds={gameState.roundHistory}
                player1={gameState.player1}
                player2={gameState.player2}
                isVisible={showHistory}
                onToggle={() => setShowHistory(!showHistory)}
            />

        </div>
  )
}

export default App
