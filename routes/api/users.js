const router = require("express").Router();
const User = require("../../models/users")
const passport = require("../../config/passport");

//post route for signing up new user
router.post("/signup", (req, res) => {
    console.log("user signed up");
    const { email, firstName, lastName, password } = req.body;
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            console.log(err);
        }
        else if (user) {//if user exists
            res.json({ err: `${email} account already exists...` });
        }
        else {
            const newUser = new User({
                email: email,
                firstName: firstName,
                lastName: lastName,
                password: password
            });
            newUser.save((err, savedUser) => {
                if (err) return res.json(err);
                res.json(savedUser);//save new user
                console.log("user saved")
            });
        }
    })
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else if (user) {
      //if user exists
      res.json({ err: `${email} account already exists...` });
    } else {
      const newUser = new User({
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        res.json(savedUser); //save new user
        console.log("user saved");
      });
    }
  });
});

//router get for login >>> router.get("/")
//router post for logout
//router.get for profile page

module.exports = router;