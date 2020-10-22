import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

let store;
const sagaMiddleware = createSagaMiddleware();

if (process.env.NODE_ENV !== "production") {
  store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
} else {
  store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
}

export default store;
