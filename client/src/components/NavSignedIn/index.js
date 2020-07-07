import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "semantic-ui-react"
import { left } from "inquirer/lib/utils/readline";

const clearName =() => {
  console.log("clearName called");
  localStorage.clear();
}

function NavSignedIn() {
  const location = useLocation();
  return (
    <Menu>
      <Menu.Item active={location.pathname === "/home" ? "true" : ""}>
        <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item active={location.pathname === "/profile" ? "true" : ""}>
        <Link to="/profile">Profile</Link>
      </Menu.Item>{/* 
      <Menu.Item active={location.pathname === "/following" ? "true" : ""}>
        <Link to="/following">Following</Link>
      </Menu.Item> */}
      <Menu.Item active={location.pathname === "/post" ? "true" : ""}>
        <Link to="/post">Post</Link>
      </Menu.Item>
      <Menu.Item active={location.pathname === "/" ? "true" : ""}>
        <Link style={{marginLeft: "1255px"}} onClick={clearName} to="/">Logout</Link>
      </Menu.Item>
    </Menu>
  );
}

export default NavSignedIn;
