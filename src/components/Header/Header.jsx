import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({}) => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Task1">Task1</NavLink>
        <NavLink to="/users">users</NavLink>
      </nav>
    </header>
  );
};

export default Header;
