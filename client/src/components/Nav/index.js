import React from "react";
import { Link, useLocation } from "react-router-dom";

// const [image, setImage] = useState("");
// const [loading, setLoading] = useState(false);
// const handleUpload = (e) => {
//   setImage(e.target.files[0]);
// };

function Nav() {
  const location = useLocation();
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/signup"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/login"
          className={
            location.pathname === "/about" ? "nav-link active" : "nav-link"
          }
        >
          Log In
        </Link>
      </li>
    <li className="nav-item">
      <Link
        to="/"
        className={location.pathname === "/" ? "nav-link active" : "nav-link"}
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
//we can make the tabs have an active state by adding the 'active' className as needed
export default Nav;
