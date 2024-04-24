import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { statusFilters } from "../../redux/constants";
import { tasksSelector } from "../../redux/selectors";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => {
        return !task.completed;
      });
    case statusFilters.completed:
      return tasks.filter((task) => {
        return task.completed;
      });
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(tasksSelector);
  const filters = useSelector((state) => {
    return state.filters.status;
  });

  const visibleTasks = getVisibleTasks(tasks, filters);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
