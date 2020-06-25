
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    title: String,
    body: String,
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    dateCreated: Date,
    comments: [{body:"string", by: mongoose.Schema.Types.ObjectId}],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
