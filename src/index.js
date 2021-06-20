import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import createSagaMiddleware from "redux-saga";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { rootSaga } from "./sagas/index";

//import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

/*const reducers = {
  // ... your other reducers here ...
  form: formReducer     // <---- Mounted at 'form'
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)*/
ReactDOM.render(
  <React.StrictMode>
   {/* <Provider store={store}>*/}
      <App />
   {/*</Provider>*/}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
