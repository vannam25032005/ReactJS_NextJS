import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const tang = () => setCount(count + 1);

  const giam = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => setCount(0);

  return (
    <div>
      <h2 style={{ color: count > 10 ? "red" : "black" }}>{count}</h2>

      <button onClick={tang}>+</button>
      <button onClick={giam}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
