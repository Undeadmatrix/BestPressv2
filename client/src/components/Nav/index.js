import React from "react";

// const [image, setImage] = useState("");
// const [loading, setLoading] = useState(false);
// const handleUpload = (e) => {
//   setImage(e.target.files[0]);
// };

function Nav() {
  return (
    <nav className="ui grid stackable container menu">
      <h3 className="ui small header item"></h3>
      <a href="/home" className="item">
        Wall
      </a>
      <a href="/posts" className="item">
        Write a post
      </a>
      <button>

      </button>
    </nav>
  );
}
//we can make the tabs have an active state by adding the 'active' className as needed
export default Nav;
