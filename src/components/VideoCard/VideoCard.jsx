import "./VideoCard.css";
import { chessbase } from "../../assets";

const VideoCard = () => {
  return (
    <div className="video-card">
      <div className="video-header">
        <img
          src="http://i3.ytimg.com/vi/tSRV1LSpWt8/hqdefault.jpg"
          className="img-responsive video-thumbnail grid-position"
        ></img>
        <div className="video-controls grid-position">
          <div className="video-time">
            <span>2:14:31</span>
          </div>
          <div className="action-btns">
            <button>
              <i class="fa-solid fa-thumbs-up like"></i>
            </button>
            <button>
              <i class="fa-solid fa-bookmark watch-later"></i>
            </button>
            <button>
              <i class="fa-solid fa-folder-plus playlist"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="video-body">
        <img
          src={chessbase}
          className="img-responsive img-circle video-body-img"
        ></img>
        <div>
          <h3 className="video-title">
            Grand Prix 22 celebrating Vidit success
          </h3>
          <small className="gray-text ">Chessbase India</small>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
