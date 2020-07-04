import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "semantic-ui-react"

// const [image, setImage] = useState("");
// const [loading, setLoading] = useState(false);
// const handleUpload = (e) => {
//   setImage(e.target.files[0]);
// };

function Nav() {
  const location = useLocation();
  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item className="nav-item">
          <Link
            to="/signup"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Sign Up
          </Link>
        </Menu.Item>
        <Menu.Item className="nav-item">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Log In
          </Link>
        </Menu.Item>
        <Menu.Item className="nav-item">
          <Link
            to="/home"
            className={
              location.pathname === "/home" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Link>
        </Menu.Item>
        <Menu.Item className="nav-item">
          <Link
            to="/profile"
            className={
              location.pathname === "/profile" ? "nav-link active" : "nav-link"
            }
          >
            Profile
          </Link>
        </Menu.Item>
        <Menu.Item className="nav-item">
          <Link
            to="/following"
            className={
              location.pathname === "/following"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Following
          </Link>
        </Menu.Item>
        <Menu.Item className="nav-item">
          <Link
            to="/post"
            className={
              location.pathname === "/post" ? "nav-link active" : "nav-link"
            }
          >
            Post
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
//we can make the tabs have an active state by adding the 'active' className as needed
export default Nav;
