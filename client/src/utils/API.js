import axios from "axios";

export default {
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/users/posts");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/users/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/users/posts/" + id);
  },
  // Saves a post to the database
  savePost: function(postData) {
    return axios.post("/api/users/posts", postData);
  },
  getUser: function(email) {
    console.log("API EMAIL: ",email);
    return axios.get("/api/users/user/" + email);
  },
  getPostsByUser: function(id) {
    console.log("getPostsByUser: ", id);
    return axios.get("/api/users/profile/" + id);
  },
  updateUserEmail: function(email) {
    return axios.put("/api/users/updateEmail/" + email);
  },
  updateFirstName: function(first, email) {
    return axios.post("/api/users/updateFirst/" + first + "/" + email);
  }
};
