import React from "react";

const Form = ({ addTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { task, desc } = form.elements;
    const taskObj = { title: task.value, desc: desc.value };

    e.target.reset();

    addTask(taskObj);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="task"></input>
      <input type="text" name="desc"></input>
      <button type="submit">Add task</button>
    </form>
  );
};

export default Form;
