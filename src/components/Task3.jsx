import { useState, useEffect } from "react";
import Button from "./button/Button";

const Task3 = () => {
  useEffect(() => {
    console.log("hello world");
  }, []);
  const [totalCount, setCount] = useState(0);
  useEffect(() => {
    console.log("totalCount");
  }, [totalCount]);
  //сінтаксіс розмонтування
  useEffect(() => {
    return () => {};
  }, []);
  //==================================================
  const handleClick = () => {
    setCount(totalCount + 1);
  };
  return (
    <>
      <p>Total count: {totalCount}</p>
      <Button handleClick={handleClick}>1</Button>
      <Button handleClick={handleClick}>2</Button>
      <Button handleClick={handleClick}>3</Button>
    </>
  );
};
export default Task3;
