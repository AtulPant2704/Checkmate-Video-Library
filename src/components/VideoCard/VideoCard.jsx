import "./VideoCard.css";

const VideoCard = ({ thumbnail, title, videoLength, channelName, channelImg }) => {
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
            <button>
              <i className="fa-solid fa-thumbs-up like"></i>
            </button>
            <button>
              <i className="fa-solid fa-bookmark watch-later"></i>
            </button>
            <button>
              <i className="fa-solid fa-folder-plus playlist"></i>
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
