import { useState, useEffect } from "react";
/* import { getTodos } from "../API"; */
import MyList from "../components/MyList";
import { useDispatch } from "react-redux";
import { fetchTasks } from "../redux/tasks/operations";

const MyUseEffect = () => {
  /* const [todos, setTodos] = useState([]); */
  //якщо немає сторуб працюємо без редакса
  /* useEffect(() => {
    async function fetchData() {
      const data = await getTodos();
      setTodos(data);
    }
    fetchData();
  }, []); */

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <MyList list={todos}></MyList>
    </div>
  );
};

export default MyUseEffect;
