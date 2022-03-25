import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenuBar = () => {
    setMenuOpen(true);
  }
  const closeMenuBar = () => {
    setMenuOpen(false);
  }

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
        <Link to="/login">
            <div className="user-action">
              <button className="btn btn-text-primary btn-user"><i className="fa-solid fa-user"></i></button>
              <p>Hi, Atul</p>
            </div>
        </Link>
      </div>

      <div className={`hamburger-menu ${menuOpen ? "hamburger-menu-open" : ""}`}>
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
            <Link to="/playlists" onClick={closeMenuBar}>
              <li>
                <i className="fa-solid fa-folder-plus"></i>
                <span>Playlists</span>
              </li>
            </Link>
            <Link to="/liked" onClick={closeMenuBar}>
              <li>
                <i className="fa-solid fa-thumbs-up"></i>
                <span>Liked</span>
              </li>
            </Link>
            <Link to="/watchlater" onClick={closeMenuBar}>
              <li>
                <i className="fa-solid fa-bookmark"></i>
                <span>Watch Later</span>
              </li>
            </Link>
            <Link to="/history" onClick={closeMenuBar}>
              <li>
                <i className="fa-solid fa-clock"></i>
                <span>History</span>
              </li>
            </Link>
            <Link to="/login" onClick={closeMenuBar}>
              <li>
                <i className="fa-solid fa-right-to-bracket"></i>
                <span>Login</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
