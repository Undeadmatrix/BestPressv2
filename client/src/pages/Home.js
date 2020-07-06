import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import NavSignedIn from "../components/NavSignedIn";
import Axios from "axios";

function Home() {
    const [posts, setPosts] = useState([])



    useEffect(() => {
        loadPosts()
      }, [])

      function formatDate(date) {
          console.log("format date reached");
          const moment = require("moment");
          const formattedDate = moment(date).format("YYYY-MM-DD");
          return formattedDate;
      }

      function loadPosts() {
          console.log("loadPosts Reached");
        API.getPosts()
          .then(res => {
            setPosts(res.data)
            /* Axios.get("/api/users/" + res.postedBy)
            .then(res => {
                console.log("author: ", res.data);
                return author = res.firstname + res.lastname;
            }) */
            console.log(res.data)
          })
          .catch(err => console.log(err));
      };

      function deletePost(id) {
        API.deletePost(id)
          .then(res => loadPosts())
          .catch(err => console.log(err));
      }

    return (
        <Container fluid>
            <NavSignedIn />
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>Welcome</h1>
                    </Jumbotron>
                </Col>
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Posts</h1>
                    </Jumbotron>
                    {posts.length ? (
                        <List>
                    {posts.map(post => (
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
                </Col>
            </Row>
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </Container>
    );
}

export default Home;
