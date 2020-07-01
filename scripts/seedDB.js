const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/users");

const userSeed = [
  {
    username: "JordanUser",
    password: "password",
    firstname: "Jordan",
    lastname: "Noe",
    following: [
      {
        User: "ChrisUser"
      }
    ],
    followers: [
      {
        User: "ChrisUser"
      }
    ],
    dateCreated: new Date(Date.now()),
    savedFiles: [{}],
    favoritePosts: [],
    avatarImage: [],
    jumboImg: [],
    profile: {
      job: "Restraunt manager",
      location: "Brick, NJ",
      school: "",
      bio: "",
      interests: []
    }
  },
  {
    username: "ChrisUser",
    password: "password",
    firstname: "Chistopher",
    lastname: "Little",
    following: [
      {
        User: "JordanUser"
      }
    ],
    followers: [
      {
        User: "JordanUser"
      }
    ],
    dateCreated: new Date(Date.now()),
    savedFiles: [{}],
    favoritePosts: [],
    avatarImage: [],
    jumboImg: [],
    profile: {
      job: "",
      location: "",
      school: "",
      bio: "",
      interests: []
    }
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
