import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context";
import "./Drawer.css";

const Drawer = () => {
  const navigate = useNavigate();
  const {
    authState: { token },
  } = useAuth();

  const checkToken = (path) => {
    if (token) {
      navigate(`/${path}`);
    } else {
      navigate("/login");
      toast.warning("You're not logged in");
    }
  };

  return (
    <div className="drawer-page-routes">
      <ul>
        <Link to="/">
          <li>
            <i className="fa-solid fa-house-chimney"></i>
            <p>Home</p>
          </li>
        </Link>
        <Link to="/explore">
          <li>
            <i className="fa-solid fa-compass"></i>
            <p>Explore</p>
          </li>
        </Link>
        <li onClick={() => checkToken("playlists")}>
          <i className="fa-solid fa-folder-plus"></i>
          <p>Playlists</p>
        </li>
        <li onClick={() => checkToken("liked")}>
          <i className="fa-solid fa-thumbs-up"></i>
          <p>Liked</p>
        </li>
        <li onClick={() => checkToken("watchlater")}>
          <i className="fa-solid fa-bookmark"></i>
          <p>Watch Later</p>
        </li>
        <li onClick={() => checkToken("history")}>
          <i className="fa-solid fa-clock"></i>
          <p>History</p>
        </li>
      </ul>
    </div>
  );
};

export { Drawer };
