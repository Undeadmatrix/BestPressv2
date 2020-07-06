const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const Schema = mongoose.Schema;
//const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    following: [{
        User: String,
        id: {type: mongoose.Schema.Types.ObjectId }
    }],
    followers: [{
        User: String,
        id: {type: mongoose.Schema.Types.ObjectId }
    }],
    posts: [{
        title: String,
        body: String,
        postedBy: {type: mongoose.Schema.Types.ObjectId},
        dateCreated: Date,
        comments: [{body:"string", by: mongoose.Schema.Types.ObjectId}],
    }],
    dateCreated: Date,
    savedFiles:[{}],
    favoritePosts: [],
    avatarImage: [{Image: String}],
    jumboImg: [{Image: String}],
    profile: {
        job: String,
        location: String,
        school: String,
        bio: String,
        interests: []
    }
});

var User = (module.exports = mongoose.model("User", userSchema));
module.exports.createUser = function (newUser, callback) {
  //console.log("createUser - newUser", newUser)
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(newUser.password, salt, function (err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};
module.exports.getUserByEmail = function (email, callback) {
  //console.log("getUserByEmail", email)
  var query = { email: email };
  //console.log(query);
  User.findOne(query, callback);
};
module.exports.getUserById = function (id, callback) {
  //console.log("getUserById", id);
  User.findById(id, callback);
};
module.exports.comparePassword = function (candidatePassword, hash, callback) {
  //console.log("comparePassword")
  bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
};
var LocalStrategy = require("passport-local").Strategy;
passport.use(
  new LocalStrategy({ usernameField: "email" }, function (
    email,
    password,
    done
  ) {
    //console.log("LocalStrategy");
    User.getUserByEmail(email, function (err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, { message: "Unknown User" });
      }
      User.comparePassword(password, user.password, function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Invalid password" });
        }
      });
    });
  })
);
passport.serializeUser(function (user, done) {
  //console.log("serializeUser", user.id)
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  //console.log("deserializeUser", id);
  User.getUserById(id, function (err, user) {
    //console.log("deserializeUser - user", `name="${user.name}" \nemail="${user.email}"\npassword=${user.password} `);
    done(err, user);
  });
});