import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import "./css/signup.css";
const styles = { inputField: { marginTop: 5 } };

class Login extends Component {
    state = {
    email: "",
    password: ""
  };

  componentDidUpdate() {}

  

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
    console.log("handleSubmit / axios.post.login");
    const { email, password } = this.state;
    console.log(this.state);
    //query database
    const user = { email, password };
    console.log("user", user);//finish handleSubmit
    
    axios.post("/api/users/login", user)
      .then(res => {
        console.log("axios.post reached");
        console.log("res.data email, password ",res.data.email, res.data.password);
        if (!res.data.err) {
          console.log("No errors");
          window.location.replace("/home");
        }
        else {
          console.log(res.data.err);
        }
      })
      /* API.getUser(user.id)
      .then(res => {
        if (!res.data.err) {
          console.log("No errors");
          this.setState({
            redirect: "/home"
          });
        }
        else{
          console.log(res.data.err);
        }
        }) */
      .catch(err => {
        console.log("error", err);
      });
  };

  showHidePass = () => {
    var toggleText = document.getElementById("password-input");
    if (toggleText.type === "password") {
      toggleText.type = "text";
    } else toggleText.type = "password";
  };

  render() {
    return (
      <div className="ui stackable container">
        <div className="ui form">
          <h2>BestPress</h2>
          <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="eight wide field">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email-input"
                placeholder="Email Address"
                onChange={this.handleChange}
              />
            </div>
            <div className="eight wide field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password-input"
                placeholder="Password"
                onChange={this.handleChange}
              />
              <input type="checkbox" style = { styles.inputField } onClick={this.showHidePass} />
              Show Password
            </div>
            <button type="submit" className="ui button">
              Login
            </button>
          </form>
          <br />
          <p>
            <a href="/signup">First Time User?</a>
          </p>
        </div>
      </div>
    );
  }
}
export default Login;
  /* handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state.lastName}`
      );
    } /* else if(!this.state.email || !this.validateEmail(this.state.email)) {
        alert("Please include a valid email");
    } */ /* else{
        window.location.replace("/home");
    }
    this.setState({
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
    </Container>
    );
  }
}

export default Form; */ 
