import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/login"
          className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
          Log In
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
