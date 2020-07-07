import React from "react";
import axios from "axios";
import API from "../utils/API";
import NavSignedIn from "../components/NavSignedIn";



class Profile2 extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        id: ""
    }

    componentDidMount() {
        const userEmail = localStorage.getItem("userEmail");
        this.setState({
            email: userEmail
        }, () => {
            console.log(this.state.email);
            API.getUser(this.state.email)
            .then(data => {
                console.log("data: ",data);
                this.setState({
                    firstName: data.data.firstName,
                    lastName: data.data.lastName,
                })
                console.log("firstName: ", this.state.firstName);
                console.log("lastName: ", this.state.lastName);
            })
        })
    }
    
    getUserInfo = () => {
        API.getUser()
        .then()
    }

    render() {
        return(
            <div>
      <NavSignedIn />
    <div className="ui container">
        <h1>{this.state.firstName} {this.state.lastName}'s Profile Page</h1>
      {/* <h1 className="center red-text">Profile Image Upload</h1>
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
              <img src={image} alt="profile pic" style={{ width: "300px" }} />
            )}
          </div>
        </div>
      </div>
      <script
        src="https://widget.cloudinary.com/v2.0/global/all.js"
        type="text/javascript"
      ></script> */}
    </div>
    </div>
        )
    }
}

export default Profile2;