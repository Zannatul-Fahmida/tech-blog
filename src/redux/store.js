import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/rootReducer";
import historyCounter from "./middlewares/historyCounter";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
); //using redux devtool

export default store;