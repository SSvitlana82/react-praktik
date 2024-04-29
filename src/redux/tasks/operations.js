import axios from "axios";

import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./tasksSlice";

const BASE_URL = "https://62584f320c918296a49543e7.mockapi.io";
const END_POINT = "/tasks";
const url = BASE_URL + END_POINT;

export const fetchTasks = () => async (dispatch) => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get(url);
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
    console.log(error);
  }
};
