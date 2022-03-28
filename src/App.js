import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer, Backdrop, CreatePlaylistModal } from "./components";
import { Login, SignUp, Explore, LikedVideos, WatchLater, History, Playlists, Profile } from "./pages";

function App() {
  const [playlistModal, setPlaylistModal] = useState(false);

  return (
    <div className="App">
      {playlistModal ? <CreatePlaylistModal setPlaylistModal={setPlaylistModal} /> : null}
      {playlistModal ? <Backdrop setPlaylistModal={setPlaylistModal} /> : null}

      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/explore" element={<Explore setPlaylistModal={setPlaylistModal} />} />
        <Route path="/liked" element={<LikedVideos />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
