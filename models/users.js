const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    firstname: String,
    lastname: String,
    following: [{
        User: String,
    }],
    followers: [{
        User: String,
    }],
    dateCreated: Date,
    savedFiles:[{}],
    favoritePosts: [ postId ],
    avatarImage: [ imageId ],
    jumboImg: [ jumboId ],
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
