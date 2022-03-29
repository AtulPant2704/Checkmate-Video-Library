import "./HorizontalVideoCard.css";
import { useLocation } from "react-router-dom";
import { useLikes, useAuth, usePlaylists } from "../../hooks";
import { removeFromLikesHandler, deleteVideoFromPlaylistHandler, getSinglePlaylistHandler } from "../../utils";

const HorizontalVideoCard = ({ _id, thumbnail, title, channelName, playlistID, setPlaylist }) => {
    const location = useLocation();
    const { authState: { token } } = useAuth();
    const { likesDispatch } = useLikes();
    const { playlistsDispatch } = usePlaylists();

    const checkDeleteAction = () => {
        if (location === "/liked") {
            removeFromLikesHandler(_id, token, likesDispatch);
        }
        else {
            deleteVideoFromPlaylistHandler(playlistID, _id, token, playlistsDispatch);
            getSinglePlaylistHandler(token, playlistID, setPlaylist);
        }
    }

    return (
        <div className="liked-video">
            <div className="video-description">
                <div className="img-container">
                    <img src={thumbnail} alt={title} className="img-responsive video-img" />
                </div>
                <div className="video-info">
                    <h3 className="video-title">{title}</h3>
                    <small className="video-channel">{channelName}</small>
                </div>
            </div>
            <button className="btn-delete" onClick={checkDeleteAction}><i className="fa-solid fa-trash-can"></i></button>
        </div>
    )
}

export { HorizontalVideoCard };
