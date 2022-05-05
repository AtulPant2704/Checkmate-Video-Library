import ReactPlayer from "react-player";

const VideoSection = ({
  video,
  callAddToHistoryHandler,
  checkLikesActionHandler,
  checkLikesAction,
  checkWatchLaterActionHandler,
  checkWatchLaterAction,
  findPlaylistVideo,
  videoRef,
  likeBtnDisable,
  watchLaterBtnDisable,
}) => {
  return (
    <section className="video-section">
      <div className="video-player">
        <ReactPlayer
          width="100%"
          height="100%"
          url={`https://www.youtube.com/embed/${video.youtubeID}`}
          controls={true}
          onStart={callAddToHistoryHandler}
          ref={videoRef}
        />
      </div>
      <h2 className="video-title">{video.title}</h2>
      <div className="video-info">
        <small>{video.viewCount}</small>
        <div className="action-btns">
          <button
            title="Like"
            disabled={likeBtnDisable}
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
            disabled={watchLaterBtnDisable}
            onClick={() => checkWatchLaterActionHandler(video._id)}
          >
            <i
              onClick={watchLaterBtnDisable ? (e) => e.stopPropagation() : null}
              className={`${
                checkWatchLaterAction(video._id) ? "fa-solid" : "fa-regular"
              } fa-bookmark`}
            ></i>
            Later
          </button>

          <button title="Playlist" onClick={() => findPlaylistVideo(video._id)}>
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
    </section>
  );
};

export { VideoSection };
