import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useLikes,
  useAuth,
  usePlaylists,
  useHistory,
  useWatchLater,
} from "../../context";
import {
  removeFromLikesHandler,
  deleteVideoFromPlaylistHandler,
  getSinglePlaylistHandler,
  removeFromHistoryHandler,
  removeFromWatchLaterHandler,
} from "../../utils";
import "./HorizontalVideoCard.css";

const HorizontalVideoCard = ({
  _id,
  thumbnail,
  title,
  channelName,
  playlistID,
  setPlaylist,
}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [likeBtnDisable, setLikeBtnDisable] = useState(false);
  const [watchlaterBtnDisable, setWatchLaterBtnDisable] = useState(false);
  const {
    authState: { token },
  } = useAuth();
  const { likesDispatch } = useLikes();
  const { playlistsDispatch } = usePlaylists();
  const { historyDispatch } = useHistory();
  const { watchLaterDispatch } = useWatchLater();

  const checkDeleteAction = (e) => {
    e.stopPropagation();
    switch (pathname) {
      case "/liked":
        removeFromLikesHandler(_id, token, likesDispatch, setLikeBtnDisable);
        break;
      case "/history":
        removeFromHistoryHandler(_id, token, historyDispatch);
        toast.info("Video removed from History");
        break;
      case "/watchlater":
        removeFromWatchLaterHandler(
          _id,
          token,
          watchLaterDispatch,
          setWatchLaterBtnDisable
        );
        break;
      case `/playlists/${playlistID}`:
        deleteVideoFromPlaylistHandler(
          playlistID,
          _id,
          token,
          playlistsDispatch
        );
        getSinglePlaylistHandler(token, playlistID, setPlaylist);
        break;
      default:
        break;
    }
  };

  return (
    <div className="liked-video" onClick={() => navigate(`/explore/${_id}`)}>
      <div className="video-description">
        <div className="img-container">
          <img
            src={thumbnail}
            alt={title}
            className="img-responsive video-img"
          />
        </div>
        <div className="video-info">
          <h3 className="video-title">{title}</h3>
          <small className="video-channel">{channelName}</small>
        </div>
      </div>
      <button className="btn-delete" onClick={checkDeleteAction}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
};

export { HorizontalVideoCard };
