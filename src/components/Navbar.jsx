import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import Navbar styles

const Navbar = () => {
  return (
    <header className="navbar">
      <h1 className="navbar-logo">Resume Critique Tool</h1>
      <nav>
        <ul className="navbar-links">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
