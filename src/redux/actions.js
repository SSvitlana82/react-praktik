import { nanoid } from "nanoid";
export const addTask = (text) => {
  return {
    type: "tasks/addTask",
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};

export const deletTask = (taskId) => {
  return {
    type: "tasks/deleteTask",
    payload: taskId,
  };
};
export const toggleCompleted = (taskId) => {
  return {
    type: "filters/toggle",
    payload: taskId,
  };
};
export const setStatusFilter = (value) => {
  return {
    type: "filters/setStatusFilter",
    payload: value,
  };
};
