import { FETCH_STUDENTS_ERROR, FETCH_STUDENTS_REQUEST, FETCH_STUDENTS_SUCCESS } from "./studentsTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_STUDENTS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_STUDENTS_ERROR:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;