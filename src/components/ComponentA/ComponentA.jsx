import { useState } from "react";
import useToggle from "../../hooks/useToggle";

const ComponentA = ({}) => {
  const { isOpen, open, close } = useToggle();
  return (
    <div>
      <button onClick={open}>Open modal</button>
      <Modal isOpen={isOpen} onClose={close}></Modal>
    </div>
  );
};

export default ComponentA;