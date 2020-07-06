const db = require("../models");
const passport = require("passport");
console.log("--------------------------------------");
console.log("Controller Reached");
console.log("--------------------------------------");
// Defining methods for the postController
module.exports = {
  findAll: function(req, res) {
    console.log("----------------------findAll------------------------  ");
    console.log("req.query: ", req.query);
    db.Post
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Post
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("postController Create reached: ");
    console.log("req.body: ",req.body);
    console.log("req.user ", req.user);
    // 1. find the existing user (or you get id from Passport session)
  db.User.findByIdAndUpdate(req.user._id).then((user) => {
    // 2. add an post set "postedBy" as the user
    return db.Post.create({
      postedBy: req.user._id,
      title: req.body.title,
      body: req.body.body,
      dateCreated: Date.now(),
    });
  });
  },
  update: function(req, res) {
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Post
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
