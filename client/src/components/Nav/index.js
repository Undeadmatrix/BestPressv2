import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "semantic-ui-react"

function Nav() {
  const location = useLocation();
  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item active={location.pathname === "/signup" ? "true" : ""}>
          <Link to="/signup">Sign Up</Link>
        </Menu.Item>
        <Menu.Item active={location.pathname === "/" ? "true" : ""}>
          <Link to="/">Log In</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
export default Nav;
