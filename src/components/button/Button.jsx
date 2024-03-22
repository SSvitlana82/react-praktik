const Button = ({ handleClick, children }) => {
  return (
    <>
      <button onClick={handleClick}>{children || "hello"}</button>
    </>
  );
};
export default Button;
