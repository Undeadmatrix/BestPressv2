const router = require("express").Router();
const db = require("../../models");
const passport = require("passport");
const postController = require("../../controllers/postController");
const { createUser } = require("../../models/users");
//const userController = require("../../controllers/userController");

//post route for signing up new user
router.post("/signup", (req, res) => {
  console.log("user signed up");
  const { email, firstName, lastName, password } = req.body;
  console.log("name: ", req.body.firstName, req.body.lastName);
  db.User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else if (user) {
      //if user exists
      res.json({ err: `${email} account already exists...` });
    } else {
      const newUser = new db.User({
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password
      });
      createUser(newUser);
      res.send("/");
      console.log("new Name: ", newUser.firstName, newUser.lastName);
      /* newUser.save((err, savedUser) => {
                if (err) return res.json(err);
                res.json(savedUser);//save new user
                console.log("user saved")
                console.log("name: ", newUser.firstName, newUser.lastName);
            }); */
    }
  });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("post /login");
  console.log("req.user: ", req.user);
  let { email, password } = req.body;
  if (req.user) {
    console.log("api/login user request: ", req.user);
    return res.send(({ email, password } = req.user));
  }
  db.User.findOne({ email: email }, (err, user) => {
    if (err) {
      console.log(err);
    } else if (user) {
      res.send(user);
    }
  });
});

router.get('/profile/:id', function(req, res) {
  console.log("profile posts hit");
  console.log("req.params: ", req.params);
  db.Post.find({"postedBy":req.params.id}, (err, posts) => {
     if(err) {
       console.log(err);
     } else {
       res.send(posts);
     }
  });
});

router.put("/updateEmail/:email", function(req, res) {
  console.log("update email hit");
  db.User.getUserByEmail(req.params.email)
    .then(res => {
      console.log("god help me: ", res.data);
    })
})

router.get("/user/:email", function(req, res) {
  console.log("id hit");
  console.log(req.params.email);
  db.User
      .getUserByEmail(req.params.email)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
});
/* router
  .route("/")
  .post(userController.create)
  .get(userController.findAll)
  .put(userController.update)
  .delete(userController.remove);
  console.log("/api/users reached");

router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);
  console.log("/api/users/:id reached"); */

/* router.get("/posts", (req, res) => {
  console.log("/post route hit");
  console.log(req.data);
}) */

router
  .route("/posts")
  .post(postController.create)
  .get(postController.findAll)
  .put(postController.update)
  .delete(postController.remove);
console.log("/posts reached");

// Matches with "/api/books/:id"
router
  .route("/posts/:id")
  .get(postController.findById)
  .put(postController.update)
  .delete(postController.remove);

//router get for login >>> router.get("/")
//router post for logout
//router.get for profile page

module.exports = router;
