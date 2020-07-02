const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

app.get('/'), (req, res) => {
  res.send('Testing');
};
//routes variables
const indexRouter = require("./routes/index");
const userRouter = require("./routes/api/users");
// Add routes, both API and view
app.use("/", indexRouter);
app.use("/users", userRouter);


// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/bestpress", {
    useNewParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB....");
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB.", err);
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