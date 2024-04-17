import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  const multiply = () => {
    setCounter(counter * 2);
  };

  const result = [counter, increment, decrement, multiply];
  return result;
};

export default useCounter;
