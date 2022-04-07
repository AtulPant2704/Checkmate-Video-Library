import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useCategory } from "../../context";
import "./Navbar.css";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    authState: { token, user },
  } = useAuth();
  const { categoryDispatch } = useCategory();

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

  const searchInput = (event) => {
    categoryDispatch({ type: "CLEAR_CATEGORY" });
    setSearchQuery(event.target.value);
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
        {location.pathname === "/explore" ? (
          <div className="search">
            <span className="btn-search">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              placeholder="Search"
              className="input-search"
              value={searchQuery}
              onChange={searchInput}
            />
          </div>
        ) : null}
        <div className="user-action">
          <button
            className="btn btn-text-primary btn-user"
            onClick={() => userHandler(checkStatus(user))}
          >
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
