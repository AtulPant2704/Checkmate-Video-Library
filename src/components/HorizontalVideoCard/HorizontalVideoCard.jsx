import "./HorizontalVideoCard.css";
import { useLikes, useAuth } from "../../hooks";
import { removeFromLikesHandler } from "../../utils";

const HorizontalVideoCard = ({ _id, thumbnail, title, channelName }) => {
    const { authState: { token } } = useAuth();
    const { likesDispatch } = useLikes();
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
            <button className="btn-delete" onClick={() => removeFromLikesHandler(_id, token, likesDispatch)}><i className="fa-solid fa-trash-can"></i></button>
        </div>
    )
}

export { HorizontalVideoCard };
