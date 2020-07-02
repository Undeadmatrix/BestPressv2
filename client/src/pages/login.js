import React, { Component } from "react";
import axios from "axios";
const styles = { inputField: { marginTop: 5 } };

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidUpdate() {}

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    console.log(this.state);
    //query database
    const user = { username, password };
    console.log("user", user);//finish handleSubmit

    axios.post("/api/login", user)
      .then(res => {
        console.log(res);
        if (!res.data.err) {
          console.log("No errors");
          this.setState({
            redirect: "/home"
          });
        }
        else {
          console.log(res.data.err);
        }
      })
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
                name="username"
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
