import React from "react";

const Form = ({ addTask }) => {
  return (
    <form>
      <input type="text" name="task"></input>
      <button type="submit">Add task</button>
    </form>
  );
};

export default Form;
