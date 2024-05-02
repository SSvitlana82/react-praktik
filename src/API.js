import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export async function getTodos() {
  const END_POINT = "/todos";
  const res = await axios.get(END_POINT);

  return res.data;
}

//запит на сервер зі створенням Action
export const getUsers = createAsyncThunk(
  "users/getAll",
  async (_, thunkAPI) => {
    try {
      const END_POINT = "/users";
      const res = await axios.get(END_POINT);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
); //первірка
//запит на сервер
export async function getComents(userID) {
  const END_POINT = "/coments";
  const params = {
    userID,
    myParam: "hello World",
  };
  const res = await axios.get(END_POINT, { params });

  return res.data;
}
