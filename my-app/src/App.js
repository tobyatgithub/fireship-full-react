import React, { useState } from "react";
// import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  const [previousCount, setPreviousCount] = useState(0);

  const handleClick = () => {
    setPreviousCount(count);
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Current Count: {count}</h3>
      <h3>Previous Count: {previousCount}</h3>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default App;
