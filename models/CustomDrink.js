var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;


var CustomDrinksSchema = new Schema({
    user_name: {
        type: String
    },
    id: {
        type: Number,
    },
    drink_name: {
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
var CustomDrinks = mongoose.model("CustomDrinks", CustomDrinksSchema);

// Export the User model
module.exports = CustomDrinks;