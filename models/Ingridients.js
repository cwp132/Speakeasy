var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;


var IngridientSchema = new Schema({
    ing_name: {
        type: String,
    },
    drinks: [{
        type: String,
    }]
});
// This creates our model from the above schema, using mongoose's model method
var Ingridient = mongoose.model("Drinks", IngridientSchema);

// Export the User model
module.exports = Ingridient;