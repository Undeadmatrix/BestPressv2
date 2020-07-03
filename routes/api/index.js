const router = require("express").Router();
const userRoutes = require("./users");

console.log("/users");
router.use("/users", userRoutes);

module.exports = router;
