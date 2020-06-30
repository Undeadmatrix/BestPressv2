const router = require("express").Router();
const postRoutes = require("./posts");

// post routes
router.use("/posts", postRoutes);

module.exports = router;
