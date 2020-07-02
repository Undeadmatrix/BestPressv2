import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    redirect: null
  };

  componentDidUpdate() {}

  showHidePass = () => {
    var toggleText = document.getElementById("password-input");
    if (toggleText.type === "password") { toggleText.type = "text";}
    else toggleText.type = "password";
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = this.state;
    console.log(this.state);
    //create User object
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
    console.log(newUser);
    //request to server to add a new user
    axios.post("/users/signup", newUser)
      .then(res => {
        console.log(res);
        if (!res.data.err) {
          console.log("successful signup");
          this.setState({
            //change redirect state to login
            redirect: "/login"
          });
        }
        else {
          console.log(res.data.err);
        }
      })
      .catch(err => {
        console.log("signup error", err);
      });
  };

  render() {
    //redirects to login page
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
      <div id="signup" className="ui grid stackable container eight wide">
        <img
          href="/public/assets/images/38C19A1C00000578-0-image-a-26_1474750500393.jpg"
          alt="man diving into water"
        />
        <div className="ui form">
          <form className="ui form " onSubmit={this.handleSubmit}>
            <h2>Signup Form</h2>
            <div className="field">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                id="first-input"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <div className="field">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  id="last-input"
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email-input"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password-input"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <input type="checkbox" onClick={this.showHidePass} />
              Show Password
            </div>
            <button type="submit" className="ui button">
              Signup
            </button>
          </form>
          <br />
          <a href="/login">Already have an account?</a>
        </div>
      </div>
    );
  }
}

export default Signup;
