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
          to="/"
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
    </ul>
  );
}
//we can make the tabs have an active state by adding the 'active' className as needed
export default Nav;
