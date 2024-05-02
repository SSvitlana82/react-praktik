import { useState } from "react";

const MyList = ({ list }) => {
  return (
    <ul>
      {list.map((todo) => {
        return <li key={todo.id}>{todo.id}</li>;
      })}
    </ul>
  );
};

export default MyList;
