import React from "react";
import Task from "../Task/Task";

const TaskList = ({ taskList, deleteTask }) => {
  return (
    <div>
      {taskList.map((task, i) => {
        return (
          <Task
            task={task}
            key={i}
            deleteTask={() => {
              deleteTask(i);
            }}
          ></Task>
        );
      })}
    </div>
  );
};

export default TaskList;
