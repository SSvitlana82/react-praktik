import { useState, useEffect } from "react";

import Button from "./button/Button";
const Task6 = () => {
  const [count, setCount] = useState(() => {
    const x = JSON.parse(localStorage.getItem("counter")) || 0;
    return x;
  });

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <Button handleClick={() => setCount(count + 1)}>Add</Button>
      <Button handleClick={() => setCount(0)}>Reset</Button>
    </div>
  );
};
export default Task6;
