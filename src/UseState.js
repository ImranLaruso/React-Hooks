import { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const inceCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={inceCount}>+</button>
    </>
  );
}
