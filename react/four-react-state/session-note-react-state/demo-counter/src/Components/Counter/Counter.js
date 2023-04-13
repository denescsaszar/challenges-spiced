import { useState } from "react";

export default function Counter() {
  // let count = 0;
  const [count, setCount] = useState(0);

  function handleCLick() {
    console.log("I am clicking");
    // count++;
    setCount(count + 1);
    console.log("count: ", count);
    // count = count + 1;
    // console.log(count);
  }
  return (
    <button onClick={handleCLick}>
      You have clicked this button count times
    </button>
  );
}
