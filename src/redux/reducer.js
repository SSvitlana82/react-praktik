import { statusFilters } from "./constants";
import { createReducer } from "@reduxjs/toolkit";
import {
  addTask,
  deleteTask,
  toggleCompleted,
  setStatusFilter,
} from "./actions";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];
const filtersInitialState = {
  status: statusFilters.all,
};

/* const tasksReducer = (state = taskInitialState, action) => {
  switch (action.type) {
    case "tasks/addTask": {
      return [...state, action.payload];
    }

    case "tasks/deleteTask": {
      return state.filter((task) => {
        return task.id !== action.payload;
      });
    }
    case "filters/toggle": {
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        task.completed = !task.completed;
        return task;
      });
    }

    default:
      return state;
  }
}; */
const tasksReducer = createReducer(tasksInitialState, (builder) => {
  return builder
    .addCase(addTask, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteTask, (state, action) => {
      const index = state.findIndex((task) => {
        return task.id === action.payload;
      });
      state.splice(index, 1);
    })
    .addCase(toggleCompleted, (state, action) => {
      for (const task of state) {
        if (task.id === action.completed) {
          task.completed = !task.completed;
        }
      }
    });
});

/* const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter": {
      return {
        ...state,
        status: action.payload,
      };
    }
    default:
      return state;
  }
};
 */

const filtersReducer = createReducer(filtersInitialState, (builder) => {
  return builder.addCase(setStatusFilter, (state, action) => {
    state.status = action.payload;
  });
});

export const rootReducer = {
  tasks: tasksReducer,
  filters: filtersReducer,
};
