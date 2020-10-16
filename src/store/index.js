import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

let store;

if (process.env.NODE_ENV !== "production") {
  store = createStore(rootReducer, composeWithDevTools());
} else {
  store = createStore(rootReducer);
}

export default store;
