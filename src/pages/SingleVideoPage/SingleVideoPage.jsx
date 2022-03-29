import "./SingleVideoPage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleVideoHandler } from "../../utils";

const SingleVideoPage = () => {
    const [video, setVideo] = useState({});
    const { videoID } = useParams();

    useEffect(() => getSingleVideoHandler(videoID, setVideo), []);

    return (
        <main>
            <div className="singleVideo-page">
                <div className="video-section">
                    <div className="video-player">
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${video.youtubeID}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <h2 className="video-title">{video.title}</h2>
                    <div className="video-info">
                        <small>{video.viewCount}</small>
                        <div className="action-btns">
                            <button title="Like"><i className="fa-regular fa-thumbs-up"></i>Like</button>
                            <button title="Watch"><i className="fa-regular fa-bookmark"></i>Later</button>
                            <button title="Playlist"><i className="fa-solid fa-folder-plus"></i>Save</button>
                        </div>
                    </div>
                    <div className="channel-intro">
                        <img src={video.channelImg} alt="channel-image" className="img-responsive img-circle" />
                        <strong><small>{video.channelName}</small></strong>
                    </div>
                </div>
                <div className="notes-section">
                    Notes will be added here.
                </div>
            </div>
        </main>
    )
}

export { SingleVideoPage };
