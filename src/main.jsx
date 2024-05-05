import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store, { Provider } from "./store/index.js";
import "./index.css";

const app = ReactDOM.createRoot(document.getElementById("root"));

app.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
