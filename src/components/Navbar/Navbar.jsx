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
        <div className="title">
          <i className="fas fa-bars menu-bar" onClick={openMenuBar}></i>
          <Link to="/">
            <h2 className="nav-title">CheckMate</h2>
          </Link>
        </div>
        <div className="search">
          <span className="btn-search">
            <i className="fas fa-search"></i>
          </span>
          <input type="text" placeholder="Search" className="input-search" />
        </div>
        <div className="user-controls">
          <div className="desktop-userName">
            Atul
          </div>
          <button className="btn-login">User</button>
        </div>
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
            <li>
              <Link to="/" onClick={closeMenuBar}>Home</Link>
            </li>
            <li>
              <Link to="/explore" onClick={closeMenuBar}>Explore</Link>
            </li>
            <li>
              <Link to="/playlists" onClick={closeMenuBar}>Playlists</Link>
            </li>
            <li>
              <Link to="/liked" onClick={closeMenuBar}>Liked</Link>
            </li>
            <li>
              <Link to="/watchlater" onClick={closeMenuBar}>Watch Later</Link>
            </li>
            <li>
              <Link to="/history" onClick={closeMenuBar}>History</Link>
            </li>
            <li>
              <Link to="/login" onClick={closeMenuBar}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
