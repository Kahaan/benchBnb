import { combineReducers } from "redux";

import filters from "./filter_reducer";

const uiReducer = combineReducers({
  filters
});

export default uiReducer;
