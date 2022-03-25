import "./Drawer.css"
import {Link} from "react-router-dom";

const Drawer = () => {
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
            <Link to="/playlists">
              <li>
                <i className="fa-solid fa-folder-plus"></i>
                <p>Playlists</p>
              </li>
            </Link>
            <Link to="/liked">
              <li>
                <i className="fa-solid fa-thumbs-up"></i>
                <p>Liked</p>
              </li>
            </Link>
            <Link to="/watchlater">
              <li>
                <i className="fa-solid fa-bookmark"></i>
                <p>Watch Later</p>
              </li>
            </Link>
            <Link to="/history">
              <li>
                <i className="fa-solid fa-clock"></i>
                <p>History</p>
              </li>
            </Link>
            <Link to="/login">
              <li>
                <i className="fa-solid fa-right-to-bracket"></i>
                <p>Login</p>
              </li>
            </Link>
          </ul>
        </div>
    )
}

export {Drawer};
