import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      NYT-React
    </Link>
    <button
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/saved">Saved Articles</Link>
        </li>
      </ul>
    </div>
=======

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      React Reading List
    </a>
>>>>>>> 333358986ea8556c0d8cfe36a74d426f95efe22f
  </nav>
);

export default Nav;
