import { configureStore } from "@reduxjs/toolkit";

import { todoReduser } from "./asyncTasks/tasksSlice";

export const store = configureStore({ reducer: { todo: todoReduser } });
