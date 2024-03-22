import Button from "../button/Button";
import { useState } from "react";

const ClickCounter = ({ children }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <div>
      <p>{clicks}</p>
      <Button handleClick={handleClick}>{children}</Button>
    </div>
  );
};
export default ClickCounter;
