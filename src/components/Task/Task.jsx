import React from "react";

const Task = ({ task, deleteTask }) => {
  return (
    <div>
      <p>{task.title}</p>

      <p>{task.desc}</p>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default Task;
