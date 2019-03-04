import { combineReducers } from "redux";
import { testReducer, bookData } from "./reducer";

const rootReducer = combineReducers({
  testReducer,
  bookData
});

export default rootReducer;
