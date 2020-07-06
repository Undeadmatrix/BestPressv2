import React, { useState, useEffect } from "react";
import axios from "axios";
import NavSignedIn from "../components/NavSignedIn";
// import cloudinary from "cloudinary-core";

const Profile = () => {
  // cloudinary.setCloudName("bestpress")
  // const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: "bestpress" });
  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/bestpress/image/upload";
  const CLOUDINARY_UPLOAD_PRESET = "oeh4sefx";

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = async (e) => {
    const files = e.target.files;
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    setLoading(true);
    const res = await fetch(
      CLOUDINARY_URL,
      {
        method: "POST",
        body: formData
      }
    )
    const file = await res.json()
    console.log(file.secure_url);
    setImage(file.secure_url)
    setLoading(false);
    const newImage = {
      url: file.secure_url
    }
    console.log(newImage);
    axios
      .post("/images/upload", newImage)
      .then((res) => {
        console.log(res);
        if (!res.data.err) {
          console.log("successfully stored");
          alert("Image uploaded");
        } else {
          console.log(res.data.err);
        }
      })
      .catch((err) => {
        console.log("signup error", err);
      });
  };

  return (
    <div className="ui container">
      <NavSignedIn />
      <h1 className="center red-text">Profile Image Upload</h1>
      <div className="file-field input-field">
        <div className="button">
          <span>Browse </span>
          <input
            type="file"
            name="file"
            placeholder="Upload an image"
            onChange={onChange}
          />
          <div>
            {loading ? (
              <h3>Loading...</h3>
            ) : (
              <img src={image} style={{ width: "300px" }} />
            )}
          </div>
        </div>
      </div>
      <script
        src="https://widget.cloudinary.com/v2.0/global/all.js"
        type="text/javascript"
      ></script>
    </div>
  );
};
export default Profile;
