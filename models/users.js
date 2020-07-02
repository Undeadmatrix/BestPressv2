const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required: true},
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
    avatarImage: [{Image: String}],
    jumboImg: [{Image: String}],
    profile: {
        job: String,
        location: String,
        school: String,
        bio: String,
        interests: []
    }
});



// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
userSchema.methods.validPassword = function(password) {
    console.log(password);
    return bcrypt.compareSync(password, this.password);
    };
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
userSchema.pre("save", function (next) {
    const user = this;
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
    next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
