import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "semantic-ui-react"

function NavSignedIn() {
  const location = useLocation();
  return (
    <Menu>
      <Menu.Item active={location.pathname === "/home" ? "true" : ""}>
        <Link to="/signup">Home</Link>
      </Menu.Item>
      <Menu.Item active={location.pathname === "/profile" ? "true" : ""}>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item active={location.pathname === "/following" ? "true" : ""}>
        <Link to="/following">Following</Link>
      </Menu.Item>
      <Menu.Item active={location.pathname === "/post" ? "true" : ""}>
        <Link to="/post">Post</Link>
      </Menu.Item>
    </Menu>
  );
}

export default NavSignedIn;
