import "./App.css";
import { Routes, Route } from "react-router-dom";
import { usePlaylistModal } from "./hooks";
import { Navbar, Footer, Backdrop, CreatePlaylistModal } from "./components";
import { Login, SignUp, Explore, LikedVideos, WatchLater, History, Playlists, Profile, SinglePlaylistPage } from "./pages";

function App() {
  const { playlistModalState: { isActive } } = usePlaylistModal();

  return (
    <div className="App">
      {isActive ? <CreatePlaylistModal /> : null}
      {isActive ? <Backdrop /> : null}

      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/liked" element={<LikedVideos />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/playlists/:playlistID" element={<SinglePlaylistPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
