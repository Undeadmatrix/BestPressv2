const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    body: String,
    //author: String,
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    dateCreated: Date,
    comments: [{body:"string", by: mongoose.Schema.Types.ObjectId}],
});

const User = mongoose.model("Post", postSchema);

module.exports = User;