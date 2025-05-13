import { useState } from "react";
import "./Counter.css";
export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <section className="counter">
        <h1>Counter project</h1>
        <p>{count}</p>
        <div className="button-group">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </section>
    </>
  );
}
