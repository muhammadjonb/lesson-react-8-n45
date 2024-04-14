import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import userReducer from "./studets/studentsReduacer";

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
