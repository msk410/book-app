import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
// import rootSaga from "./sagas/rootSaga";
import rootSaga from "./sagas/saga";

const sagaMiddleware = createSagaMiddleware();
let store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
