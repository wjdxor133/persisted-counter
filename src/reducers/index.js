import { conbineReducers } from "redux";

import counter from "./counter.reducer";

const rootReducer = conbineReducers({
  counter,
});

export default rootReducer;
