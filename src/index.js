import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { VideosProvider, AuthProvider, LikesProvider, PlaylistsProvider, PlaylistModalProvider, HistoryProvider, WatchLaterProvider, CategoryProvider } from "./hooks";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <VideosProvider>
          <CategoryProvider>
            <PlaylistModalProvider>
              <PlaylistsProvider>
                <LikesProvider>
                  <WatchLaterProvider>
                    <HistoryProvider>
                      <App />
                    </HistoryProvider>
                  </WatchLaterProvider>
                </LikesProvider>
              </PlaylistsProvider>
            </PlaylistModalProvider>
          </CategoryProvider>
        </VideosProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
