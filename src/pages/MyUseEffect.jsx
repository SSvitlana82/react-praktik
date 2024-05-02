import { useState, useEffect } from "react";
import { getTodos } from "../API";
import MyList from "../components/MyList";

const MyUseEffect = ({}) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getTodos();
      setTodos(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <MyList list={todos}></MyList>
    </div>
  );
};

export default MyUseEffect;
