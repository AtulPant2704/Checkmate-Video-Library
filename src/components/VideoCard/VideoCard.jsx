import "./VideoCard.css";
import { useNavigate } from "react-router";
import { useLikes, useVideos, useAuth, usePlaylistModal, useHistory } from "../../hooks";
import { addToLikesHandler, removeFromLikesHandler, addToHistoryHandler } from "../../utils";

const VideoCard = ({ _id, thumbnail, title, videoLength, channelName, channelImg }) => {
  const navigate = useNavigate();
  const videos = useVideos();
  const { authState: { token } } = useAuth();
  const { likesState: { likes }, likesDispatch } = useLikes();
  const { historyDispatch } = useHistory();
  const { playlistModalDispatch } = usePlaylistModal();

  const callAddToLikesHandler = (_id) => {
    if (token) {
      const video = videos.find(item => item._id === _id);
      addToLikesHandler(video, likesDispatch, token);
    }
    else {
      navigate("/login");
    }
  }

  const callAddToHistoryHandler = () => {
    if (token) {
      const video = videos.find(item => item._id === _id);
      addToHistoryHandler(video, historyDispatch, token);
      navigate(`/explore/${_id}`);
    }
    else {
      navigate("/login");
    }
  }

  const checkLikesAction = (_id) => {
    return likes.find(item => item._id === _id);
  }

  const checkLikesActionHandler = (e, _id) => {
    e.stopPropagation();
    return checkLikesAction(_id) ? removeFromLikesHandler(_id, token, likesDispatch) : callAddToLikesHandler(_id);
  }

  const findPlaylistVideo = (e, _id) => {
    e.stopPropagation();
    if (token) {
      const video = videos.find(item => item._id === _id);
      playlistModalDispatch({ type: "OPEN_MODAL", payload: { isActive: true, video: video } });
    }
    else {
      navigate("/login");
    }
  }

  return (
    <div className="video-card" onClick={callAddToHistoryHandler}>
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
            <button onClick={(e) => checkLikesActionHandler(e, _id)}>
              <i className={`${checkLikesAction(_id) ? "fa-solid" : "fa-regular"} fa-thumbs-up`}></i>
            </button>
            <button>
              <i className="fa-regular fa-bookmark"></i>
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
          <h3 className="video-title">
            {title}
          </h3>
          <small className="gray-text ">{channelName}</small>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
