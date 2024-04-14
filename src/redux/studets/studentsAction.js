import axios from "axios";

import { FETCH_STUDENTS_ERROR, FETCH_STUDENTS_REQUEST, FETCH_STUDENTS_SUCCESS } from "./studentsTypes";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_STUDENTS_REQUEST,
  };
};

export const fetchUsersSuccess = (students) => {
  return {
    type: FETCH_STUDENTS_SUCCESS,
    payload: students,
  };
};

export const fetchUsersError = (error) => {
  return {
    type: FETCH_STUDENTS_ERROR,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data;
        dispatch(fetchUsersSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchUsersError(err.message));
      });
  };
};
