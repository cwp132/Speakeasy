import axios from "axios";

export default {
  searchByName: function (query) {
    return axios.get("https://www.thecocktaildb.com/api/json/v2/8673533/search.php?s=" + query);
  },
  searchIngredientByName: function (query) {
    return axios.get("https://www.thecocktaildb.com/api/json/v2/8673533/search.php?i=" + query);
  },
  searchByIngredient: function (query) {
    return axios.get("https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?i=" + query);
  },
  random: function () {
    return axios.get("https://www.thecocktaildb.com/api/json/v2/8673533/random.php");
  }

}