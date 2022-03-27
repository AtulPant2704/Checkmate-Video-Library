import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { VideosProvider, AuthProvider } from "./hooks";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VideosProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </VideosProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
