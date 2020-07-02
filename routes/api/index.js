const router = require("express").Router();
const postRoutes = require("./posts");
<<<<<<< HEAD
const userRoutes = require("./users");

router.use("/posts", postRoutes);
router.use("/users", userRoutes);
=======

// post routes
console.log("api routes /posts");
router.use("/posts", postRoutes);
>>>>>>> master

module.exports = router;
