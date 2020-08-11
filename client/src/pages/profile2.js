import React from "react";
import axios from "axios";
import API from "../utils/API";
import NavSignedIn from "../components/NavSignedIn";
import DeleteBtn from "../components/DeleteBtn";
import { List, ListItem } from "../components/List";
import "./css/profile.css";


class Profile2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        firstName: "",
        lastName: "",
        email: "",
        id: "",
        posts: [],
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);

    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
  }
    /* state = {
        firstName: "",
        lastName: "",
        email: "",
        id: "",
        posts: [],
    } */

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
                    id: data.data._id
                })
                console.log("firstName: ", this.state.firstName);
                console.log("lastName: ", this.state.lastName);
                console.log("id: ", this.state.id);
                API.getPostsByUser(this.state.id)
                .then(res => {
                    this.setState({
                    posts: res.data
                })
            })
            })
            
        })
    }

    handleFirstNameChange(event) {
      this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event) {
      this.setState({lastName: event.target.value});
    }

    handleEmailChange(event) {
      this.setState({email: event.target.value});
    }

    changeFirstName(event) {
      event.preventDefault();
      console.log(this.state);
      let newFirst = this.state.firstName;
      let userEmail = localStorage.getItem("userEmail");
      console.log("new: " + newFirst);
      API.getUser(userEmail)
      .then(data => {
        API.updateFirstName(newFirst, userEmail)
      });
    }

    changeLastName(event) {
      event.preventDefault();
      console.log(this.state);
      let newLast = this.state.lastName;
      let userEmail = localStorage.getItem("userEmail");
      console.log("new: " + newLast);
      API.getUser(userEmail)
      .then(data => {
        API.updateLastName(newLast, userEmail)
      })
    }

    changeEmail(event) {
      event.preventDefault();
      console.log(this.state);
      let newEmail = this.state.email;
      let userEmail = localStorage.getItem("userEmail");
      console.log("new: " + newEmail);
      API.getUser(userEmail)
      .then(data => {
        API.updateUserEmail(newEmail, userEmail)
      })
      localStorage.setItem("userEmail", newEmail);
    }
    
    
    getUserInfo = () => {
        API.getUser()
        .then()
    }

    
    render() {

        function formatDate(date) {
            console.log("format date reached");
            const moment = require("moment");
            const formattedDate = moment(date).format("YYYY-MM-DD");
            return formattedDate;
        }

        function deletePost(id) {
            var check = window.confirm("Are you sure you want to delete this post?");
            if(check)
            {
                API.deletePost(id)
              .then(res => this.setState({
                  posts: res.data
              }))
              .catch(err => console.log(err));
              window.location.replace("/profile")
            }
            else
            {
                return;
            }
          }

        const loggedIn = localStorage.getItem("isLoggedIn")
        console.log(loggedIn);
        if(!loggedIn)
        {
          alert("you need to log in");
          window.location.replace("/");
        }
        else {

        return(
            <div>
      <NavSignedIn />
    <div className="ui container">
        <h1>{this.state.firstName} {this.state.lastName}'s Profile Page</h1>
        <h2>Posts</h2>
        {this.state.posts.length ? (
                            <List>
                        {this.state.posts.slice(0).reverse().map(post => (
                            <ListItem key={post._id}>
                                <br />
                                    <strong>
                                        <h2>{post.title} by {post.author}</h2>
                                        <p>{formatDate(post.dateCreated)}</p>
                                    </strong>
                                    <br />
                                    <h4>{post.body}</h4>
                                <DeleteBtn onClick={() => deletePost(post._id)} />
                                <br />
                            </ListItem>
                        ))}
                        </List>
                        
                        ) : (
                            <h3>No Results to Display</h3>
                          )
                          
                        }

            
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
    <br />
    <br />
    <br />
      <div className="ui container">

      <form>
        <label>
          Change your first name:
          <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange}/>
        </label>

        <input type="submit" value="Submit" onClick={this.changeFirstName} />
      </form>
      <br />
      <form>
        <label>
          Change your last name:
          <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange}/>
        </label>

        <input type="submit" value="Submit" onClick={this.changeLastName} />
      </form>

      {/* <form>
        <label>
          Change your email:
          <input type="text" value={this.state.email} onChange={this.handleEmailChange}/>
        </label>

        <input type="submit" value="Submit" onClick={this.changeEmail} />
      </form> */}

      </div>
    </div>
        )
    }
    }
}

export default Profile2;