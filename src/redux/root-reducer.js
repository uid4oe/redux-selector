import { combineReducers } from "redux";
import { firstReducer } from "./first/first.reducer";
import { secondReducer } from "./second/second.reducer";

const rootReducer = combineReducers({
  first: firstReducer,
  second: secondReducer,
});

export default rootReducer;
