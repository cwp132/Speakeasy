const axios = require("axios")

axios.get("https://www.thecocktaildb.com/api/json/v2/8673533/search.php?s=margarita")
    .then(function(res){
        console.log(res.data)
    })