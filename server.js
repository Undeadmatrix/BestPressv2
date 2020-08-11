const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
const passport = require("passport");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
 if (process.env.NODE_ENV === "production") {
   app.use(express.static("client/build"));
   //app.use('/static', express.static(path.join(__dirname, 'client/build')));
 }

// Initialize passport
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);




// Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bestpress", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
//check database for user xxx
//make sure redirect works xxx
//login page to login
//encription @signup and login
//logout function in api/users.js
//get route to check router
//get cloudinary modal to render