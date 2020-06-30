import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavSignedIn() {
  const location = useLocation();
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/home"
          className={location.pathname === "/blog" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/profile"
          className={location.pathname === "/profile" ? "nav-link active" : "nav-link"}
        >
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/following"
          className={location.pathname === "/following" ? "nav-link active" : "nav-link"}
        >
          Following
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/post"
          className={location.pathname === "/post" ? "nav-link active" : "nav-link"}
        >
          Post
        </Link>
      </li>
    </ul>
  );
}

export default NavSignedIn;
