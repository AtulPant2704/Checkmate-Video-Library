import "./VideoCard.css";
import {chessbase} from "../../assets";

const VideoCard = () => {
    return(
        <div className="video-card">
            <div className="video-header">
                <img src="http://i3.ytimg.com/vi/tSRV1LSpWt8/hqdefault.jpg" className="img-responsive video-thumbnail grid-position"></img>
                <div className="action-btns grid-position">
                    <span><i class="fa-solid fa-thumbs-up like"></i></span>
                    <span><i class="fa-solid fa-bookmark watch-later"></i></span>
                </div>
            </div>
            <div className="video-body">
                <img src={chessbase} className="img-responsive img-circle video-body-img"></img>
                <h3 className="video-title">Grand Prix 22 celebrating Vidit success</h3>
            </div>
        </div>
    )
}

export {VideoCard};
