import { useState } from "react";

const useToggle = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const result = { isOpen, open, close };
  return result;
};

export default useToggle;
