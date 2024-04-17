import useCounter from "../../hooks/useCounter";
import { useMyContext, myContext } from "../../hooks/useMyContext";

const Task2 = ({}) => {
  const [counter, increment, decrement] = useCounter();
  const [counterLeft, incrementLeft, decrementleft, multiply] = useCounter();

  const globalContext = useMyContext();
  console.log(globalContext);
  console.log(myContext);

  return (
    <div>
      <div>
        <button onClick={increment}>click+</button>
        <button onClick={decrement}>click-</button>
        <p>{counter}</p>
      </div>
      <div>
        <button onClick={incrementLeft}>click+</button>
        <button onClick={multiply}>click-</button>
        <p>{counterLeft}</p>
      </div>
    </div>
  );
};

export default Task2;
