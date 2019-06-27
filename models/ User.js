var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    id: {
        type: Number,
    },
    user_name: {
        type: String,
    },
    password: {
        type: String,
    },
    favorites: [{
        type: String,
    }]
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;