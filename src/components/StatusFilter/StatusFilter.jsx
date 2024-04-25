import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import { statusFilters } from "../../redux/constants";
import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/actions";

export const StatusFilter = () => {
  const dispatch = useDispatch();

  const filter = useSelector((state) => {
    console.log(state);
    return state.filters.status;
  });

  const handleFilteChange = (valueFilter) => {
    dispatch(setStatusFilter(valueFilter));
  };
  return (
    <div className={css.wrapper}>
      <Button
        onClick={() => handleFilteChange(statusFilters.all)}
        selected={filter === statusFilters.all}
      >
        All
      </Button>
      <Button
        onClick={() => handleFilteChange(statusFilters.active)}
        selected={filter === statusFilters.active}
      >
        Active
      </Button>
      <Button
        onClick={() => handleFilteChange(statusFilters.completed)}
        selected={filter === statusFilters.completed}
      >
        Completed
      </Button>
    </div>
  );
};
