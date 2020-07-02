const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    firstname: String,
    lastname: String,
    following: [{
        User: String,
        id: {type: mongoose.Schema.Types.ObjectId }
    }],
    followers: [{
        User: String,
        id: {type: mongoose.Schema.Types.ObjectId }
    }],
    posts: [{
        title: String,
        body: String,
        postedBy: {type: mongoose.Schema.Types.ObjectId},
        dateCreated: Date,
        comments: [{body:"string", by: mongoose.Schema.Types.ObjectId}],
    }],
    dateCreated: Date,
    savedFiles:[{}],
    favoritePosts: [],
    avatarImage: [],
    jumboImg: [],
    profile: {
        job: String,
        location: String,
        school: String,
        bio: String,
        interests: []
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
