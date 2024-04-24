import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { tasksSelector } from "../../redux/selectors";

export const TaskCounter = () => {
  const tasks = useSelector(tasksSelector);

  const counter = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.active += 1;
      } else {
        acc.completed += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return (
    <div>
      <p className={css.text}>Active: {counter.active}</p>
      <p className={css.text}>Completed: {counter.completed}</p>
    </div>
  );
};
