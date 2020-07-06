const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
console.log("/api");
router.use("/api", apiRoutes);
console.log("/api route found");

router.get("/logout", function (req, res) {
    console.log("logout clicked");
    req.logout();
    res.redirect("/");
  });
// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

module.exports = router;
