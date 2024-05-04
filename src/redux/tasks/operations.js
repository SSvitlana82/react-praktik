import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

/* import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./tasksSlice"; */

/* const BASE_URL = "https://62584f320c918296a49543e7.mockapi.io";
const END_POINT = "/tasks"; */
const BASE_URL = "https://jsonplaceholder.typicode.com";
const END_POINT = "/todos";
const url = BASE_URL + END_POINT;

export const fetchTasks = createAsyncThunk(
  "todos/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
