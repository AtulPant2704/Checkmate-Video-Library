import "./HorizontalVideoCard.css";

const HorizontalVideoCard = () => {
    return (
        <div className="liked-video">
            <div className="video-description">
                <div className="img-container">
                    <img src="http://i3.ytimg.com/vi/tSRV1LSpWt8/hqdefault.jpg" alt="" className="img-responsive video-img" />
                </div>
                <div className="video-info">
                    <h3 className="video-title">Grand Prix 22 celebrating Vidit success</h3>
                    <small className="video-channel">Chessbase India</small>
                </div>
            </div>
            <button className="btn-delete"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    )
}

export { HorizontalVideoCard };
