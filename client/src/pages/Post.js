/* import React, { useState, useEffect } from "react"; */

/* const Post = () => {
    return (
      <div class="ui stackable container menu">
        <div class="ui form">
          <form id="importantForm" class="ui form">
            <div class="field">
              <input
                name="article"
                id="title-input"
                placeholder="Title"
              ></input>
            </div>
            <div class="field">
              <textarea
                id="body-input"
                cols="160"
                rows="10"
                placeholder="Your thoughts..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="ui inverted blue button"
              id="create-post"
            >
              create post
            </button>
          </form>
        </div>
      </div>
    );
}; */
/* 
export default Post; */
import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import NavSignedIn from "../components/NavSignedIn";
import API from "../utils/API";
import passport from "passport";
import { TextArea } from "semantic-ui-react";

class Form extends Component {
    state = {
        title: "",
        body: "",
        userid: ""
    }

    handleInputChange = (event) => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = (event) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        
        API.savePost(this.state)
        .then(data => {
          console.log("data: ", data);
          this.setState({
            title: data.data.title,
            body: data.data.body,
            userid: data.data.userid
          });
        });
        window.location.replace("/home");
      };

      render() {
        const loggedIn = localStorage.getItem("isLoggedIn")
        console.log(loggedIn);
        if(!loggedIn)
        {
          alert("you need to log in");
          window.location.replace("/");
        }
        else{

        
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
          <Container>
            <NavSignedIn />
            <Row>
              <Col size="md-6 sm-12">
                <div className="ui container">
                <form className="form">
                  <h3>Title</h3>
                  <textarea
                    value={this.state.title}
                    name="title"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Title"
                    rows="1"
                    cols="70"
                  />
                  <h3>Body</h3>
                  <textarea
                    value={this.state.body}
                    name="body"
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Body"
                    rows="6"
                    cols="70"
                  />
                  <br />
                  <br />
                  <br />
                  <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
                </div>
              </Col>
            </Row>
          </Container>
        );
      }
      }
}

export default Form;
