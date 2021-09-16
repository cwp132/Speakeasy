var axios = require("axios")

axios.get("https://www.thecocktaildb.com/api/json/v2/8673533/search.php?s=" + process.argv[2])
.then((data)=>{
    console.log(data.data)
})