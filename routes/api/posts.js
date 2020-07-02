const router = require("express").Router();
const postController = require("../../controllers/postController");

console.log("posts.js reached");
router
  .route("/")
  .post(postController.create)
  .get(postController.findAll)
  .put(postController.update)
  .delete(postController.remove);
console.log("/posts reached");

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(postController.findById)
  .put(postController.update)
  .delete(postController.remove);


module.exports = router;
