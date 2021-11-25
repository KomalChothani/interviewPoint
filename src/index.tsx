import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import InterviewPoint from "./component/InterviewPoint";
import { store } from "./reducers";
import "./styles/index.css";

ReactDOM.render(
  <Provider store={store}>
    <InterviewPoint />
  </Provider>,
  document.getElementById("root")
);
