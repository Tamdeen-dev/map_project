import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';
import * as serviceWorker from "./serviceWorker.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
serviceWorker.unregister();