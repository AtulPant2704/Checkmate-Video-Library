import "./VideoCard.css";
import { useNavigate } from "react-router";
import { useLikes, useVideos, useAuth } from "../../hooks";
import { addToLikesHandler, removeFromLikesHandler } from "../../utils";

const VideoCard = ({ _id, thumbnail, title, videoLength, channelName, channelImg }) => {
  const navigate = useNavigate();
  const videos = useVideos();
  const { authState: { token } } = useAuth();
  const { likesState: { likes }, likesDispatch } = useLikes();

  const callAddToLikesHandler = (_id) => {
    if (token) {
      const video = videos.find(item => item._id === _id);
      addToLikesHandler(video, likesDispatch, token);
    }
    else {
      navigate("/login");
    }
  }

  const checkLikesAction = (_id) => {
    return likes.find(item => item._id === _id);
  }

  const checkLikesActionHandler = (_id) => {
    return checkLikesAction(_id) ? removeFromLikesHandler(_id, token, likesDispatch) : callAddToLikesHandler(_id);
  }

  return (
    <div className="video-card">
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
            <button onClick={() => checkLikesActionHandler(_id)}>
              <i className={`${checkLikesAction(_id) ? "fa-solid" : "fa-regular"} fa-thumbs-up`}></i>
            </button>
            <button>
              <i className="fa-regular fa-bookmark"></i>
            </button>
            <button>
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
