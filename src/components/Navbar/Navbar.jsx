import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useCategory } from "../../context";
import "./Navbar.css";
import { Search } from "../Search/Search";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    authState: { token, user },
  } = useAuth();

  const openMenuBar = () => setMenuOpen(true);

  const closeMenuBar = () => setMenuOpen(false);

  const checkStatus = (user) => {
    return user ? `Hi, ${user.firstName}` : "Login";
  };

  const userHandler = async (type) => {
    type === "Login" ? navigate("/login") : navigate("/profile");
  };

  const routeHandler = (path) => {
    closeMenuBar();
    navigate(`/${path}`);
    if (!token) {
      toast.warning("You're not logged in");
    }
  };

  return (
    <header>
      <div className="nav-header">
        <div className="title-explore">
          <div className="title">
            <i className="fas fa-bars menu-bar" onClick={openMenuBar}></i>
            <Link to="/">
              <h2 className="nav-title">CheckMate</h2>
            </Link>
          </div>
          <div className="explore-tab">
            <Link to="/">
              <h3>Explore</h3>
            </Link>
          </div>
        </div>

        <Search />

        <div
          className="user-action"
          onClick={() => userHandler(checkStatus(user))}
        >
          <button className="btn btn-text-primary btn-user">
            <i className="fa-solid fa-user"></i>
          </button>
          <p>{checkStatus(user)}</p>
        </div>
      </div>

      <div
        className={`hamburger-menu ${menuOpen ? "hamburger-menu-open" : ""}`}
      >
        <div className="profile-header">
          <div className="user-profile">
            <i className="fas fa-user"></i>
            <p className="user-name">Atul</p>
          </div>
          <i className="fas fa-times menu-bar-close" onClick={closeMenuBar}></i>
        </div>
        <div className="page-routes">
          <ul>
            <Link to="/" onClick={closeMenuBar}>
              <li>
                <i className="fa-solid fa-compass"></i>
                <span>Explore</span>
              </li>
            </Link>
            <li onClick={() => routeHandler("playlists")}>
              <i className="fa-solid fa-folder-plus"></i>
              <span>Playlists</span>
            </li>
            <li onClick={() => routeHandler("liked")}>
              <i className="fa-solid fa-thumbs-up"></i>
              <span>Liked</span>
            </li>
            <li onClick={() => routeHandler("watchlater")}>
              <i className="fa-solid fa-bookmark"></i>
              <span>Watch Later</span>
            </li>
            <li onClick={() => routeHandler("history")}>
              <i className="fa-solid fa-clock"></i>
              <span>History</span>
            </li>
            <li onClick={() => routeHandler("profile")}>
              <i className="fa-solid fa-right-to-bracket"></i>
              <span>Profile</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
