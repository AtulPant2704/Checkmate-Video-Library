import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  AuthProvider,
  LikesProvider,
  PlaylistsProvider,
  PlaylistModalProvider,
  HistoryProvider,
  WatchLaterProvider,
  CategoryProvider,
} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CategoryProvider>
        <PlaylistModalProvider>
          <PlaylistsProvider>
            <LikesProvider>
              <WatchLaterProvider>
                <HistoryProvider>
                  <Router>
                    <App />
                  </Router>
                </HistoryProvider>
              </WatchLaterProvider>
            </LikesProvider>
          </PlaylistsProvider>
        </PlaylistModalProvider>
      </CategoryProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
