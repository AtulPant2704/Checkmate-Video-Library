import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RequiresAuth } from "./RequiresAuth";
import { usePlaylistModal } from "./context";
import { CreatePlaylistModal } from "./components";
import {
  Login,
  SignUp,
  Explore,
  LikedVideos,
  WatchLater,
  History,
  Playlists,
  Profile,
  SinglePlaylistPage,
  SingleVideoPage,
  Error404,
} from "./pages";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const {
    playlistModalState: { isActive },
  } = usePlaylistModal();

  return (
    <div className="App">
      {isActive ? <CreatePlaylistModal /> : null}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Explore />} />
        <Route path="/explore/:videoID" element={<SingleVideoPage />} />
        <Route
          path="/liked"
          element={
            <RequiresAuth>
              <LikedVideos />
            </RequiresAuth>
          }
        />
        <Route
          path="/watchlater"
          element={
            <RequiresAuth>
              <WatchLater />
            </RequiresAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequiresAuth>
              <History />
            </RequiresAuth>
          }
        />
        <Route
          path="/playlists"
          element={
            <RequiresAuth>
              <Playlists />
            </RequiresAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route
          path="/playlists/:playlistID"
          element={
            <RequiresAuth>
              <SinglePlaylistPage />
            </RequiresAuth>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
