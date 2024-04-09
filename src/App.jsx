import { useState } from "react";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import Task4 from "./components/Task4";
import Task5 from "./components/Task5";
import Task6 from "./components/Task6";
import Task7 from "./components/Task7";
import LoginForm from "./components/LoginForm";
import SearchBar from "./components/SearchBar";
import Coffee from "./components/Coffee";
import Checkform from "./components/Checkform";
import FormLogin from "./components/FormLogin";

import "./App.css";

const App = () => {
  /* const handleLogin = (userData) => {
    console.log(userData);
  };
  const [langValue, setLangValue] = useState("uk"); */
  return (
    <>
      {/* <Task2 />
      <Task3 />
      <Task4 />
      <Task5 />
      <Task6 /> 
      <Task7 />
      <LoginForm onLogin={handleLogin} />
      <SearchBar langValue={langValue} onSelect={setLangValue} />
      <p>{langValue}</p>*/}
      <Coffee />
      <Checkform />
      <FormLogin />
    </>
  );
};

export default App;
