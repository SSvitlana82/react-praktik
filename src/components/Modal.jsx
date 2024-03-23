import { useEffect } from "react";
const Modal = () => {
  useEffect(() => {
    const timerId = setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div>Modal</div>;
};
export default Modal;
