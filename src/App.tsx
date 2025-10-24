import './App.css'
import {ChoiceButton} from "./components/common/ChoiceButton.tsx";
import {CHOICES} from "./utils/gameLogic.ts";

function App() {

  return (
    <>
        <div className="game-board__choices">
            {CHOICES.map((choice) => (
                <ChoiceButton
                    key={choice}
                    choice={choice!}
                    onClick={() => console.log(choice)}
                    disabled={false}
                />
            ))}
        </div>
    </>
  )
}

export default App
