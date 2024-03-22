import { useEffect } from "react";

const Task4 = () => {
  useEffect(() => {
    console.log("hello");
  }, []);
  return <p>hello</p>;
};
export default Task4;
