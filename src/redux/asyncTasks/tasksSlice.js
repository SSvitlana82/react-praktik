import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../API";
import { tasksReducer } from "../tasks/tasksSlice";
import { buildErrorMessage } from "vite";

const initState = {
  items: [],
  status: true,
  isLoading: false,
  error: null,
};
//асиннхронний redux
export const todosSlice = createSlice({
  name: "tasks",
  initialState: initState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.isLoading = true;
      }) //завантаження пішло
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload; //payload - дані які відправила
        state.error = null;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const todoReduser = todosSlice.reducer;

/* extraReducers: {
    
    [getUsers.pending](state, action) {
      state.isLoading = true;
    }, //завантаження пішло
    [getUsers.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload; //payload - дані які відправила
      state.error = null;
    },
    [getUsers.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }, */
