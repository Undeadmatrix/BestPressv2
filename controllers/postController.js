const db = require("../models");
console.log("--------------------------------------");
console.log("Controller Reached");
console.log("--------------------------------------");
// Defining methods for the postController
module.exports = {
  findAll: function(req, res) {
    console.log("----------------------findAll------------------------  ");
    console.log("req.query: ", req.query);
    db.User.posts
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.posts
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("req.body: ",req.body);
    // 1. find the existing user (I guess passport does the job)
    db.User.findById(req.body.userid).then((user) => {
      // 2. add an post
      user.posts.push({
        title: req.body.title,
        body: req.body.body,
        postedBy: req.body.userid,
        dateCreated: Date.now(),
        comments: [],
      }).catch(err => res.status(422).json(err));
  
      // 3. persist the changes
      user.save();
    });
  },
  update: function(req, res) {
    db.User.posts
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.posts
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
