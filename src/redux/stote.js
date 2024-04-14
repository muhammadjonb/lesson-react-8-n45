import { combineReducers, createStore } from "redux";
import studentsReducer from "./studets/studentsReduacer";

const rootReducer = combineReducers({
  studets: studentsReducer,
});

const store = createStore(rootReducer)


export default store;
