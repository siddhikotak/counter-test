import { Fragment, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const interval = useRef();

  const handleClick = () => {
    if (started) {
      clearInterval(interval.current);
      setStarted(false);
    } else {
      setStarted(true);
      interval.current = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
  };

  const handleReset = () => {
    setCount(0);
    clearInterval(interval.current);
    interval.current = 0;
    setStarted(false);
  };

  return (
    <Fragment>
      <p>{count}</p>
      <button onClick={handleClick}>{started ? "pause" : "start"}</button>
      <button onClick={handleReset}>reset</button>
    </Fragment>
  );
}

export default App;
