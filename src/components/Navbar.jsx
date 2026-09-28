import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <div className="logo-icon">🎬</div>
          <div>
            <h2>MovieSky</h2>
            <span>Movie Finder</span>
          </div>
        </div>

        <div className="nav-menu">
          <a href="#home">Home</a>
          <a href="#movies">Movies</a>
          <a href="#about">About</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;