import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/tasks/operations";

import { tasksSelector } from "../redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const [items, isLoading, error] = useSelector(tasksSelector);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
      {/* <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}
    </div>
  );
};

export default App;
