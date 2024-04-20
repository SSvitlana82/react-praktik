import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Task1 from "./pages/Task1/Task1";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";
import DoctorUser from "./pages/DoctorUser/DoctorUser";

import "./App.css";

const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/task1" element={<Task1></Task1>} />
        <Route path="/users" element={<Users></Users>}>
          <Route path="doctor" element={<DoctorUser />} />
        </Route>
        <Route path="/users/:userId" element={<UserDetails></UserDetails>} />

        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </>
  );
};

export default App;
