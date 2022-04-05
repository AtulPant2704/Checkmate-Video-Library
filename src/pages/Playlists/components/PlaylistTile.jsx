import { useNavigate } from "react-router";
import "./PlaylistTile.css";

const PlaylistTile = ({ _id, title, videos }) => {
  const navigate = useNavigate();

  return (
    <div
      className="playlist-tile"
      onClick={() => navigate(`/playlists/${_id}`)}
    >
      <h2 className="playlist-name">{title}</h2>
      <div className="playlist-size">
        <i className="fa-brands fa-youtube"></i>
        <small>{videos.length} videos</small>
      </div>
    </div>
  );
};

export { PlaylistTile };
