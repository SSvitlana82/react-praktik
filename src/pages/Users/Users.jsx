import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Users = ({}) => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        <li>
          <NavLink to="doctor">Doctor</NavLink>
        </li>
      </ul>
      <h2>hello</h2>
      <p>dhfjkshf</p>

      <Outlet />
    </div>
  );
};

export default Users;
