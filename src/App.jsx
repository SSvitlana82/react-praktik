import { useState } from "react";
import Filtr from "./components/Filtr/Filtr";
import Form from "./components/Form/Form";
import TaskList from "./components/TaskList/TaskList";

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = () => {};
  return (
    <>
      <Form addTask={addTask}></Form>
      <Filtr></Filtr>
      <TaskList></TaskList>
    </>
  );
};

export default App;
