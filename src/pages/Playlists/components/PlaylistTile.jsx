import "./PlaylistTile.css";

const PlaylistTile = ({ title, videos }) => {
    return (
        <div className="playlist-tile">
            <h2 className="playlist-name">{title}</h2>
            <div className="playlist-size">
                <i className="fa-brands fa-youtube"></i>
                <small>{videos.length} videos</small>
            </div>
        </div>
    )
}

export { PlaylistTile };
