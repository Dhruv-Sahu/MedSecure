import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Web3Provider } from "./context/web3Context";
import { AuthProvider } from "./context/authContext";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Web3Provider>
        <Router>
          <App />
        </Router>
      </Web3Provider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
