import { getD6Roll } from "../../utils";
import D6 from "../D6";
import "./D6Button.css";
import { useState } from "react";

export function D6Button({ onRoll, value }) {
  const [rolls, setRolls] = useState([]);

  const handleRoll = () => {
    const rollValue = getD6Roll();
    console.log("Rolling the dice");
    setRolls([{ value: rollValue, time: Date.now() }, ...rolls]);
    console.log("New roll value: ", rollValue);
    onRoll(rollValue);
  };

  return (
    <button className="D6Button" onClick={handleRoll}>
      <D6 value={value} />
    </button>
  );
}
