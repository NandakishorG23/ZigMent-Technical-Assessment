

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FormProvider } from "./context/FormContext";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
