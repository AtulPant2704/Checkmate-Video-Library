import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";
import {
  useLikes,
  useAuth,
  usePlaylistModal,
  useHistory,
  useWatchLater,
} from "../../context";
import {
  getSingleVideoHandler,
  addToHistoryHandler,
  removeFromHistoryHandler,
  addToWatchLaterHandler,
  removeFromWatchLaterHandler,
  addToLikesHandler,
  removeFromLikesHandler,
} from "../../utils";
import { Navbar, Footer } from "../../components";
import "./SingleVideoPage.css";

const SingleVideoPage = () => {
  const navigate = useNavigate();
  const [video, setVideo] = useState({});
  const { videoID } = useParams();
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
  const {
    historyState: { history },
    historyDispatch,
  } = useHistory();
  const { playlistModalDispatch } = usePlaylistModal();

  const callAddToHistoryHandler = () => {
    if (token) {
      if (!history.some((item) => item._id === videoID)) {
        addToHistoryHandler(video, historyDispatch, token);
      }
      else {
        removeFromHistoryHandler(video._id, token, historyDispatch);
        addToHistoryHandler(video, historyDispatch, token);
      }
    }
  }

  const callAddToLikesHandler = (_id) => {
    if (token) {
      addToLikesHandler(video, likesDispatch, token);
    } else {
      navigate("/login");
      toast.warning("You're not logged in");
    }
  };

  const checkLikesAction = (_id) => likes.some((item) => item._id === _id);

  const checkLikesActionHandler = (_id) => {
    return checkLikesAction(_id)
      ? removeFromLikesHandler(_id, token, likesDispatch)
      : callAddToLikesHandler(_id);
  };

  const callAddToWatchLaterHandler = (_id) => {
    if (token) {
      addToWatchLaterHandler(video, watchLaterDispatch, token);
    } else {
      navigate("/login");
      toast.warning("You're not logged in");
    }
  };

  const checkWatchLaterAction = (_id) =>
    watchLater.some((item) => item._id === _id);

  const checkWatchLaterActionHandler = (_id) => {
    return checkWatchLaterAction(_id)
      ? removeFromWatchLaterHandler(_id, token, watchLaterDispatch)
      : callAddToWatchLaterHandler(_id);
  };

  const findPlaylistVideo = (_id) => {
    if (token) {
      playlistModalDispatch({
        type: "OPEN_MODAL",
        payload: { isActive: true, video: video },
      });
    } else {
      navigate("/login");
      toast.warning("You're not logged in");
    }
  };

  useEffect(() => getSingleVideoHandler(videoID, setVideo), []);

  return (
    <>
      <Navbar />
      <main>
        <div className="singleVideo-page">
          <div className="video-section">
            <div className="video-player">
              <ReactPlayer
                width="100%"
                height="100%"
                url={`https://www.youtube.com/embed/${video.youtubeID}`}
                controls="true"
                onStart={callAddToHistoryHandler}
              />
            </div>
            <h2 className="video-title">{video.title}</h2>
            <div className="video-info">
              <small>{video.viewCount}</small>
              <div className="action-btns">
                <button
                  title="Like"
                  onClick={() => checkLikesActionHandler(video._id)}
                >
                  <i
                    className={`${
                      checkLikesAction(video._id) ? "fa-solid" : "fa-regular"
                      } fa-thumbs-up`}
                  ></i>
                  Like
                </button>

                <button
                  title="Watch-Later"
                  onClick={() => checkWatchLaterActionHandler(video._id)}
                >
                  <i
                    className={`${
                      checkWatchLaterAction(video._id)
                        ? "fa-solid"
                        : "fa-regular"
                      } fa-bookmark`}
                  ></i>
                  Later
                </button>

                <button
                  title="Playlist"
                  onClick={() => findPlaylistVideo(video._id)}
                >
                  <i className="fa-solid fa-folder-plus"></i>Save
                </button>
              </div>
            </div>
            <div className="channel-intro">
              <img
                src={video.channelImg}
                alt="channel-image"
                className="img-responsive img-circle"
              />
              <strong>
                <small>{video.channelName}</small>
              </strong>
            </div>
          </div>
          <div className="notes-section">Notes will be added here.</div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export { SingleVideoPage };
