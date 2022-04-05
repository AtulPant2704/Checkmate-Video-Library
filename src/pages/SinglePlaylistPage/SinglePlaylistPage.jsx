import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth, usePlaylists } from "../../context";
import { getSinglePlaylistHandler, deletePlaylistHandler } from "../../utils";
import { HorizontalVideoCard, Drawer } from "../../components";
import { playlistImage } from "../../assets";
import "./SinglePlaylistPage.css";

const SinglePlaylistPage = () => {
  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState(null);
  const {
    authState: { token },
  } = useAuth();
  const { playlistsDispatch } = usePlaylists();
  const { playlistID } = useParams();

  const callDeletePlaylistHandler = () => {
    deletePlaylistHandler(playlistID, token, playlistsDispatch);
    navigate("/playlists");
  };

  useEffect(() => getSinglePlaylistHandler(token, playlistID, setPlaylist), []);

  return (
    <main>
      <div className="singlePlaylist-page">
        <Drawer />
        <section className="singlePlaylistVideo-section">
          <div className="singlePlaylistVideo-intro">
            <img
              src={playlistImage}
              alt="watch-later-video-image"
              className="img-responsive"
            />
            {playlist ? <h2>{playlist.title}</h2> : null}
            {playlist ? <h4>{playlist.videos.length} videos</h4> : null}
            <button
              className="btn btn-text-icon btn-text-icon-primary delete-playlist-btn"
              onClick={callDeletePlaylistHandler}
            >
              <i className="fas fa-trash-alt"></i> Delete
            </button>
          </div>
          <div className="singlePlaylistVideos-container">
            {playlist
              ? playlist.videos.map((item) => (
                  <HorizontalVideoCard
                    key={item._id}
                    {...item}
                    playlistID={playlistID}
                    setPlaylist={setPlaylist}
                  />
                ))
              : null}
          </div>
        </section>
      </div>
    </main>
  );
};

export { SinglePlaylistPage };
