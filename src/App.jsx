import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Task1 from "./pages/Task1/Task1";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";

import "./App.css";

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/Task1" element={<Task1></Task1>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </>
  );
};

export default App;
