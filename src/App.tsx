import './App.scss'
import {GameBoard} from "./components/GameBoard/GameBoard.tsx";
import {useGame} from "./hooks/useGame.ts";
import {GameSetup} from "./components/GameSetup/GameSetupComponent.tsx";
import type {GameMode} from "./types/GameLogicTypes.ts";
import {GameHistory} from "./components/GameHistory/GameHistory.tsx";
import {useState} from "react";
import {ParallaxBackground} from "./components/ParallaxBackground/ParallaxBackground.tsx";

function App() {
  const { gameState, startGame, makeChoice, resetRound, resetGame } = useGame();
  const [showHistory, setShowHistory] = useState(false);

  const handleStartGame = (mode: GameMode, player1Name: string, player2Name?: string) => {
    startGame(mode, player1Name, player2Name);
  };

  const toggleHistory = () => setShowHistory(!showHistory);

  return (
    <div className="app">
      <ParallaxBackground withAnimation={!gameState.isGameActive} />
      
      {!gameState.isGameActive ? (
        <GameSetup onStartGame={handleStartGame} />
      ) : (
        <>
          <div className="app__parallax-overlay" />
          <GameBoard
            gameState={gameState}
            onMakeChoice={makeChoice}
            onResetRound={resetRound}
            onResetGame={resetGame}
          />
          <GameHistory
            rounds={gameState.roundHistory}
            player1={gameState.player1}
            player2={gameState.player2}
            isVisible={showHistory}
            onToggle={toggleHistory}
          />
        </>
      )}
    </div>
  );
}

export default App;