import { useState } from "react";
import { toast } from "react-toastify";
import {
  useAuth,
  usePlaylists,
  usePlaylistModal,
  useWatchLater,
} from "../../context";
import {
  createNewPlaylistHandler,
  addVideoToPlaylistHandler,
  deleteVideoFromPlaylistHandler,
  addToWatchLaterHandler,
  removeFromWatchLaterHandler,
} from "../../utils";
import "./CreatePlaylistModal.css";

const CreatePlaylistModal = () => {
  const [openCreatePlaylist, setOpenCreatePlaylist] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState({
    title: "",
    description: "haha",
  });
  const {
    authState: { token },
  } = useAuth();
  const {
    playlistsState: { playlists },
    playlistsDispatch,
  } = usePlaylists();
  const {
    playlistModalState: { video },
    playlistModalDispatch,
  } = usePlaylistModal();
  const {
    watchLaterState: { watchLater },
    watchLaterDispatch,
  } = useWatchLater();

  const playlistNameHandler = (event) => {
    setNewPlaylist({ ...newPlaylist, title: event.target.value });
  };

  const checkPlaylistName = (title) => {
    if (playlists.find((item) => item.title === title)) {
      toast.warning("Playlist with same title exists.");
    } else if (title === "") {
      toast.warning("Playlist name is required.");
    } else {
      return true;
    }
  };

  const callCreateNewPlaylistHandler = () => {
    if (checkPlaylistName(newPlaylist.title)) {
      createNewPlaylistHandler(newPlaylist, playlistsDispatch, token, video);
      setOpenCreatePlaylist(false);
      playlistModalDispatch({ type: "CLOSE_MODAL" });
    }
    setNewPlaylist({ ...newPlaylist, title: "" });
  };

  const checkVideoInPlaylist = (_id) => {
    const playlist = playlists.find((item) => item._id === _id);
    return playlist.videos.some((item) => item._id === video._id);
  };

  const callVideoPlaylistAction = (_id) => {
    if (checkVideoInPlaylist(_id)) {
      deleteVideoFromPlaylistHandler(_id, video._id, token, playlistsDispatch);
    } else {
      addVideoToPlaylistHandler(token, _id, video, playlistsDispatch);
    }
  };

  const checkVideoInWatchLater = () =>
    watchLater.some((item) => item._id === video._id);

  const callVideoWatchLaterAction = () => {
    if (checkVideoInWatchLater()) {
      removeFromWatchLaterHandler(video._id, token, watchLaterDispatch);
    } else {
      addToWatchLaterHandler(video, watchLaterDispatch, token);
    }
  };

  return (
    <section>
      <div
        className="backdrop"
        onClick={() => playlistModalDispatch({ type: "CLOSE_MODAL" })}
      ></div>
      <div className="playlist-modal">
        <div className="playlist-header">
          <h3>Save to...</h3>
          <button
            className="playlist-modal-close"
            onClick={() => playlistModalDispatch({ type: "CLOSE_MODAL" })}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="playlist-container">
          <div className="playlist-one">
            <input
              type="checkbox"
              id="watch-later"
              checked={checkVideoInWatchLater()}
              onChange={callVideoWatchLaterAction}
            />
            <label htmlFor="watch-later">Watch Later</label>
          </div>
          {playlists.map(({ _id, title }) => (
            <div className="playlist" key={_id}>
              <input
                type="checkbox"
                id={title}
                checked={checkVideoInPlaylist(_id)}
                onChange={() => callVideoPlaylistAction(_id)}
              />
              <label htmlFor={title}>{title}</label>
            </div>
          ))}
        </div>
        {!openCreatePlaylist ? (
          <button
            className="create-playlist-btn"
            onClick={() => setOpenCreatePlaylist(true)}
          >
            <i className="fa-solid fa-plus"></i>
            <span> Create New Playlist</span>
          </button>
        ) : (
          <div className="playlist-input-container">
            <input
              type="text"
              placeholder="Enter Playlist name..."
              className="new-playlist-name"
              value={newPlaylist.title}
              onChange={playlistNameHandler}
              required
            />
            <button
              className="close-playlist-input"
              onClick={callCreateNewPlaylistHandler}
            >
              Create
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export { CreatePlaylistModal };
