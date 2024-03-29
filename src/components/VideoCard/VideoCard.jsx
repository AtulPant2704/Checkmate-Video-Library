import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import {
  useLikes,
  useAuth,
  usePlaylistModal,
  useWatchLater,
} from "../../context";
import {
  addToLikesHandler,
  removeFromLikesHandler,
  addToWatchLaterHandler,
  removeFromWatchLaterHandler,
} from "../../utils";
import "./VideoCard.css";

const VideoCard = ({
  _id,
  thumbnail,
  title,
  videoLength,
  channelName,
  channelImg,
  videos,
}) => {
  const navigate = useNavigate();
  const [likeBtnDisable, setLikeBtnDisable] = useState(false);
  const [watchLaterBtnDisable, setWatchLaterBtnDisable] = useState(false);
  const {
    authState: { token },
  } = useAuth();
  const {
    likesState: { likes },
    likesDispatch,
  } = useLikes();
  const {
    watchLaterState: { watchLater },
    watchLaterDispatch,
  } = useWatchLater();
  const { playlistModalDispatch } = usePlaylistModal();

  const callAddToLikesHandler = (_id) => {
    if (token) {
      const video = videos.find((item) => item._id === _id);
      addToLikesHandler(video, likesDispatch, token, setLikeBtnDisable);
    } else {
      navigate("/login");
      toast.warning("You're not logged in");
    }
  };

  const checkLikesAction = (_id) => likes.some((item) => item._id === _id);

  const checkLikesActionHandler = (e, _id) => {
    e.stopPropagation();
    return checkLikesAction(_id)
      ? removeFromLikesHandler(_id, token, likesDispatch, setLikeBtnDisable)
      : callAddToLikesHandler(_id);
  };

  const callAddToWatchLaterHandler = (_id) => {
    if (token) {
      const video = videos.find((item) => item._id === _id);
      addToWatchLaterHandler(
        video,
        watchLaterDispatch,
        token,
        setWatchLaterBtnDisable
      );
    } else {
      navigate("/login");
      toast.warning("You're not logged in");
    }
  };

  const checkWatchLaterAction = (_id) =>
    watchLater.some((item) => item._id === _id);

  const checkWatchLaterActionHandler = (e, _id) => {
    e.stopPropagation();
    return checkWatchLaterAction(_id)
      ? removeFromWatchLaterHandler(
          _id,
          token,
          watchLaterDispatch,
          setWatchLaterBtnDisable
        )
      : callAddToWatchLaterHandler(_id);
  };

  const findPlaylistVideo = (e, _id) => {
    e.stopPropagation();
    if (token) {
      const video = videos.find((item) => item._id === _id);
      playlistModalDispatch({
        type: "OPEN_MODAL",
        payload: { isActive: true, video: video },
      });
    } else {
      navigate("/login");
      toast.warning("You're not logged in");
    }
  };

  return (
    <div className="video-card" onClick={() => navigate(`/explore/${_id}`)}>
      <div className="video-header">
        <img
          src={thumbnail}
          alt={title}
          className="img-responsive video-thumbnail grid-position"
        ></img>
        <div className="video-controls grid-position">
          <div className="video-time">
            <span>{videoLength}</span>
          </div>
          <div className="action-btns">
            <button
              disabled={likeBtnDisable}
              onClick={(e) => checkLikesActionHandler(e, _id)}
            >
              <i
                onClick={likeBtnDisable ? (e) => e.stopPropagation() : null}
                className={`${
                  checkLikesAction(_id) ? "fa-solid" : "fa-regular"
                } fa-thumbs-up`}
              ></i>
            </button>
            <button
              disabled={watchLaterBtnDisable}
              onClick={(e) => checkWatchLaterActionHandler(e, _id)}
            >
              <i
                onClick={
                  watchLaterBtnDisable ? (e) => e.stopPropagation() : null
                }
                className={`${
                  checkWatchLaterAction(_id) ? "fa-solid" : "fa-regular"
                } fa-bookmark`}
              ></i>
            </button>
            <button onClick={(e) => findPlaylistVideo(e, _id)}>
              <i className="fa-solid fa-folder-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="video-body">
        <img
          src={channelImg}
          className="img-responsive img-circle video-body-img"
        ></img>
        <div>
          <h3 className="video-title">{title}</h3>
          <small className="gray-text">{channelName}</small>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
