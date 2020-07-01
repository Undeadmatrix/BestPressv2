import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import NavSignedIn from "../components/NavSignedIn";
import API from "../utils/API";

class Form extends Component {
    state = {
        title: "",
        body: ""
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
        
        API.savePost(this.state);

        this.setState({
          title: "",
          body: "",
          author: ""
        });
      };

      render() {
        // Notice how each input has a `value`, `name`, and `onChange` prop
        return (
            <Container>
                <NavSignedIn />
                <Row>
                    <Col size="md-6 sm-12">
                            <form className="form">
                            <h3>Title</h3>
                            <input
                                value={this.state.title}
                                name="title"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Title"
                            />
                            <h3>Body</h3>
                            <input
                                value={this.state.body}
                                name="body"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Body"
                            />
                            <button onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
      }
}

export default Form;