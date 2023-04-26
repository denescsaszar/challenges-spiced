import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

/*
Refactor the src/components/Counter.js component so that it updates the displayed number when clicking a button.

You can use the following hints as guideline:

Looks like the Counter needs a state; can you think of an appropriate initial value?
You need to pass the current count to the ColoredNumber component as the value prop.
The buttons need to update the state accordingly, how can you achieve that?
*/

export default function Counter() {
  const [count, setCount] = useState(0);
  // function handleSubmit(event) {
  // event.preventDefault();
  // const el = event.target.elements;
  // const Counter = parseInt(el.Counter.value);
  // console.log("submitting", Counter);
  // setCounter(Counter);
  // }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}
