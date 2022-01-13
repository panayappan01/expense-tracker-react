import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import { Provider } from "./context/context";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="7c6a41c9-de5a-470c-9fcf-be02fa048a77" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
