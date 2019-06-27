var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;


var DrinksSchema = new Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
    },
    img: {
        type: String,
    },
    instructions: {
        type: String,
    },
    comments: [{
        type: String,
    }],
    rating: [{
        type: Number,
    }]
});

// This creates our model from the above schema, using mongoose's model method
var Drinks = mongoose.model("Drinks", DrinksSchema);

// Export the User model
module.exports = Drinks;