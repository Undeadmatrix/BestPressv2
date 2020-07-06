import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Nav from "../components/Nav";
import "./css/signup.css";
import { Form, Button, Checkbox } from "semantic-ui-react";

class Signup extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    redirect: null
  };

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  componentDidUpdate() {}

  showHidePass = () => {
    var toggleText = document.getElementById("password-input");
    if (toggleText.type === "password") {
      toggleText.type = "text";
    } else toggleText.type = "password";
  };

  handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    if (name === "password") {
      value = value.substring(0, 15);
    }

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
    axios
      .post("/api/users/signup", newUser)
      .then((res) => {
        console.log(res);
        if (!res.data.err) {
          console.log("successful signup");
          this.setState({
            //change redirect state to login
            redirect: "/"
          });
        } else {
          console.log(res.data.err);
          alert(res.data.err);
        }
      })
      .catch((err) => {
        console.log("signup error", err);
      });
  };

  // -----------------------------------ChrisBranch--------------------------------------
  /* handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Fill out your first and last name please!");
    } else if(!this.state.email || !this.validateEmail(this.state.email)) {
        alert("Please include a valid email");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state.lastName}`
      );
    } else {
        window.location.replace("/home");
    }

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
        <Container>
            <Nav />
            <Row>
                <Col size="md-6 sm-12">
                        <form className="form">
                        <h3>First Name</h3>
                        <input
                            value={this.state.firstName}
                            name="firstName"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="First Name"
                        />
                        <h3>Last Name</h3>
                        <input
                            value={this.state.lastName}
                            name="lastName"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Last Name"
                        />
                        <h3>Email</h3>
                        <input
                            value={this.state.email}
                            name="email"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Email"
                        />
                        <h3>Password</h3>
                        <input
                            value={this.state.password}
                            name="password"
                            onChange={this.handleInputChange}
                            type="password"
                            placeholder="Password"
                        />
                        <button onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                </Col>
            </Row>
        </Container> */

  //-----------------------------------------------------------------------------------------

  render() {
    //redirects to login page
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <div>
        <Nav />
        <Form
          className="ui stackable container eight wide"
          onSubmit={this.handleSubmit}
        >
          <h2>Create a New Account</h2>
          <Form.Field>
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
          </Form.Field>
          <Form.Field>
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
          </Form.Field>
          <Form.Field>
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
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password-input"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Checkbox label="show password" onClick={this.showHidePass} />
          </Form.Field>

          <Button style={{ float: "left" }} type="submit">
            Signup
          </Button>
          <div>
            <a id="switch-login" href="/">
              Already have an account?
            </a>
          </div>
        </Form>
      </div>
    );
  }
}

export default Signup;
