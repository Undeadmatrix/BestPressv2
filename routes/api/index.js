const router = require("express").Router();
const postRoutes = require("./posts");

// post routes
console.log("api routes /posts");
router.use("/posts", postRoutes);

module.exports = router;
