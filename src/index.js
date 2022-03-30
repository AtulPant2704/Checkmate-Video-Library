import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { VideosProvider, AuthProvider, LikesProvider, PlaylistsProvider, PlaylistModalProvider, HistoryProvider } from "./hooks";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideosProvider>
          <PlaylistModalProvider>
            <PlaylistsProvider>
              <LikesProvider>
                <HistoryProvider>
                  <App />
                </HistoryProvider>
              </LikesProvider>
            </PlaylistsProvider>
          </PlaylistModalProvider>
        </VideosProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
