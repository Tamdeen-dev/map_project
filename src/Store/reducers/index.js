import { combineReducers } from "redux";

import mallsReducer from "./malls";
import errorReducer from "./errors";

export default combineReducers({
  malls: mallsReducer,
  errors: errorReducer,
  
});