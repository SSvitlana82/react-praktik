import { useState, useEffect } from "react";
import Filtr from "./components/Filtr/Filtr";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storageData = JSON.parse(localStorage.getItem("dataTask"));
    return storageData || [];
  });
  const addTask = (taskObj) => {
    setTasks([...tasks, taskObj]);
  };
  const deleteTask = (index) => {
    const copyTask = [...tasks];
    copyTask.splice(index, 1);
    setTasks(copyTask);
  };
  useEffect(() => {
    localStorage.setItem("dataTask", JSON.stringify(tasks));
  }, [tasks]);

  const [filterValue, setfilterValue] = useState("");

  return (
    <>
      <Form addTask={addTask}></Form>
      <Filtr filterValue={filterValue} setfilterValue={setfilterValue}></Filtr>
      <TaskList
        taskList={tasks.filter((task) => {
          return task.title.toLowerCase().includes(filterValue.toLowerCase());
        })}
        deleteTask={deleteTask}
      ></TaskList>
    </>
  );
};

export default App;
