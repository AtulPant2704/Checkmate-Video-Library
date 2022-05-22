import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import { VideoSection } from "./components/VideoSection";
import { NotesSection } from "./components/NotesSection";
import "./SingleVideoPage.css";

const SingleVideoPage = () => {
  const [likeBtnDisable, setLikeBtnDisable] = useState(false);
  const [watchLaterBtnDisable, setWatchLaterBtnDisable] = useState(false);
  const navigate = useNavigate();
  const [video, setVideo] = useState({});
  const { videoID } = useParams();
  const videoRef = useRef();
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
      } else {
        removeFromHistoryHandler(video._id, token, historyDispatch);
        addToHistoryHandler(video, historyDispatch, token);
      }
    }
  };

  const callAddToLikesHandler = (_id) => {
    if (token) {
      addToLikesHandler(video, likesDispatch, token, setLikeBtnDisable);
    } else {
      navigate("/login");
      toast.warning("You're not logged in");
    }
  };

  const checkLikesAction = (_id) => likes.some((item) => item._id === _id);

  const checkLikesActionHandler = (_id) => {
    return checkLikesAction(_id)
      ? removeFromLikesHandler(_id, token, likesDispatch, setLikeBtnDisable)
      : callAddToLikesHandler(_id);
  };

  const callAddToWatchLaterHandler = (_id) => {
    if (token) {
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

  const checkWatchLaterActionHandler = (_id) => {
    return checkWatchLaterAction(_id)
      ? removeFromWatchLaterHandler(
          _id,
          token,
          watchLaterDispatch,
          setWatchLaterBtnDisable
        )
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
          <VideoSection
            video={video}
            callAddToHistoryHandler={callAddToHistoryHandler}
            checkLikesActionHandler={checkLikesActionHandler}
            checkLikesAction={checkLikesAction}
            checkWatchLaterActionHandler={checkWatchLaterActionHandler}
            checkWatchLaterAction={checkWatchLaterAction}
            findPlaylistVideo={findPlaylistVideo}
            videoRef={videoRef}
            likeBtnDisable={likeBtnDisable}
            watchLaterBtnDisable={watchLaterBtnDisable}
          />
          <NotesSection videoID={videoID} videoRef={videoRef} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export { SingleVideoPage };
