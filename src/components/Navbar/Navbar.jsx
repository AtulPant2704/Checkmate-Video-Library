import "./Navbar.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    authState: { token, userName },
  } = useAuth();

  const openMenuBar = () => {
    setMenuOpen(true);
  };
  const closeMenuBar = () => {
    setMenuOpen(false);
  };

  const navigateLogin = () => {
    navigate("/login");
    toast.warning("You're not logged in");
  };

  const checkStatus = (userName) => {
    return userName ? `Hi, ${userName.firstName}` : "Login";
  };

  const userHandler = async (type) => {
    type === "Login" ? navigateLogin() : navigate("/profile");
  };

  const checkToken = (path) => {
    closeMenuBar();
    if (token) {
      navigate(`/${path}`);
    } else {
      navigateLogin();
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
            <Link to="/explore">
              <h3>Explore</h3>
            </Link>
          </div>
        </div>
        <div className="search">
          <span className="btn-search">
            <i className="fas fa-search"></i>
          </span>
          <input type="text" placeholder="Search" className="input-search" />
        </div>
        <div className="user-action">
          <button
            className="btn btn-text-primary btn-user"
            onClick={() => userHandler(checkStatus(userName))}
          >
            <i className="fa-solid fa-user"></i>
          </button>
          <p>{checkStatus(userName)}</p>
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
                <i className="fa-solid fa-house-chimney"></i>
                <span>Home</span>
              </li>
            </Link>
            <Link to="/explore" onClick={closeMenuBar}>
              <li>
                <i className="fa-solid fa-compass"></i>
                <span>Explore</span>
              </li>
            </Link>
            <li onClick={() => checkToken("playlists")}>
              <i className="fa-solid fa-folder-plus"></i>
              <span>Playlists</span>
            </li>
            <li onClick={() => checkToken("liked")}>
              <i className="fa-solid fa-thumbs-up"></i>
              <span>Liked</span>
            </li>
            <li onClick={() => checkToken("watchlater")}>
              <i className="fa-solid fa-bookmark"></i>
              <span>Watch Later</span>
            </li>
            <li onClick={() => checkToken("history")}>
              <i className="fa-solid fa-clock"></i>
              <span>History</span>
            </li>
            <li onClick={() => checkToken("profile")}>
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
