import './App.css'
import {GameBoard} from "./components/GameBoard/GameBoard.tsx";
import {useGame} from "./hooks/useGameLogic.ts";
import {GameSetup} from "./components/GameSetup/GameSetupComponent.tsx";
import type {GameMode} from "./types/GameLogicTypes.ts";

function App() {
    const { gameState, startGame, makeChoice } = useGame();

    const handleStartGame = (mode: GameMode, player1Name: string, player2Name?: string) => {
        startGame(mode, player1Name, player2Name);
    };


    if (!gameState.isGameActive) {
        return <GameSetup onStartGame={handleStartGame} />;
    }

    return (
        <>

            <GameBoard gameState={gameState} onMakeChoice={makeChoice} />
    </>
  )
}

export default App
