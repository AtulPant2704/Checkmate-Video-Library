import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Login, SignUp, Explore, LikedVideos, WatchLater, History, Playlists, Profile } from "./pages";

function App() {
  return (
    <div className="App">
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
