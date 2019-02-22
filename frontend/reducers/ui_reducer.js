import { combineReducers } from "redux";

import filterReducer from "./filter_reducer";

const uiReducer = combineReducers({
  filterReducer
});

export default uiReducer;
