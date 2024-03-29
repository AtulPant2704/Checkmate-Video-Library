import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RequiresAuth } from "./RequiresAuth";
import { usePlaylistModal } from "./context";
import { Navbar, Footer, CreatePlaylistModal } from "./components";
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
  const { pathname } = useLocation();
  const {
    playlistModalState: { isActive },
  } = usePlaylistModal();

  return (
    <div className="App">
      {isActive ? <CreatePlaylistModal /> : null}

      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {pathname === "/" ||
      pathname.includes("/explore") ||
      pathname === "/login" ||
      pathname === "/signup" ||
      pathname === "/liked" ||
      pathname === "/watchlater" ||
      pathname === "/history" ||
      pathname === "/profile" ||
      pathname.includes("/playlists") ? (
        <Navbar />
      ) : null}
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
      {pathname === "/" ||
      pathname.includes("/explore") ||
      pathname === "/login" ||
      pathname === "/signup" ||
      pathname === "/liked" ||
      pathname === "/watchlater" ||
      pathname === "/history" ||
      pathname === "/profile" ||
      pathname.includes("/playlists") ? (
        <Footer />
      ) : null}
    </div>
  );
}

export default App;
