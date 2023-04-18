import { useState } from "react";
import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";

export default function App() {
  const [rolls, setRolls] = useState([]);
  console.log("rolls: ", rolls);

  const handleRoll = (rollValue) => {
    console.log("Rolling the dice");
    setRolls([{ value: rollValue, time: Date.now() }, ...rolls]);
    console.log("New roll value: ", rollValue);
  };

  const currentRollValue = rolls[0]?.value;

  return (
    <div className="app">
      <main className="app__main">
        <D6Button onRoll={handleRoll} value={currentRollValue} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}

