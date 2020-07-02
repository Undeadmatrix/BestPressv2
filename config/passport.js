var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models/users.js");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/username and password
passport.use(
  new LocalStrategy(
    // Our user will sign in using an username, rather than a "username"
    {
      usernameField: "email"
    },
    function (username, password, done) {
      // When a user tries to sign in this code runs
      db.User.findOne({
          email: username
        }).then(function (dbUser) {
        // If there's no user with the given username
        console.log(dbUser);
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect username."
          });
        }
        // If there is a user with the given username, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
