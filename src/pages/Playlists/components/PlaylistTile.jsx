import "./PlaylistTile.css";

const PlaylistTile = () => {
    return (
        <div className="playlist-tile">
            <h2 className="playlist-name">Opening</h2>
            <div className="playlist-size">
                <i class="fa-brands fa-youtube"></i>
                <small>2 videos</small>
            </div>
        </div>
    )
}

export { PlaylistTile };
