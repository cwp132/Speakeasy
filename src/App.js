
import React, { Component } from "react";
import { Container } from "./components/Grid";
import Search from "./components/Search";
import Results from './components/Results';
import API from "./utils/API";
import Nav from "./components/Nav";
import axios from 'axios';

class App extends Component {

  state = {
    search: "",
    searchBy: "",
    drinkArray: [],
    error: "",
  }

  isLoggedIn = () => {
    axios.get('/isLogged')
      .then(function (req, res) {
        // console.log(req.user);
        console.log("=============")
        if (req.user !== null || undefined) {
          this.setState({ isLoggedIn: true });
          console.log(this.state.isLoggedIn);
        } else {
          this.setState({ isLoggedIn: false })
        }
        console.log(this.state.isLoggedIn)
      })
      .catch(function (err) {
        console.log(err);
      })
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value })
  }

  handleSelectChange = event => {
    this.setState({ searchBy: event.target.value, drinkArray: [] })
  }


  handleFormSubmit = event => {
    switch (this.state.searchBy) {
      case "searchByName":
        event.preventDefault();
        API.searchByName(this.state.search)
          .then((res) => {
            console.log(res)
            if (res.data.drinks === "error") {
              throw new Error(res.data.drinks);
            } else {
              let results = res.data.drinks
              results = results.map(result => {
                //store each book information in a new object 
                result = {
                  key: result.idDrink,
                  id: result.idDrink,
                  title: result.strDrink,
                  img: result.strDrinkThumb,
                  instructions: result.strInstructions,
                  ingredientsArr: [result.strIngredient1, result.strIngredient2, result.strIngredient3, result.strIngredient4, result.strIngredient5,],
                  // ingredient2: result.strIngredient2,
                  // ingredient3: result.strIngredient3,
                  // ingredient4: result.strIngredient4,
                  // ingredient5: result.strIngredient5,
                  // ingredient6: result.strIngredient6,
                  // ingredient7: result.strIngredient7,
                  // ingredient8: result.strIngredient8,
                  // ingredient9: result.strIngredient9,
                  // ingredient10: result.strIngredient10,
                  measure1: result.strMeasure1,
                  measure2: result.strMeasure2,
                  measure3: result.strMeasure3,
                  measure4: result.strMeasure4,
                  measure5: result.strMeasure5,
                  measure6: result.strMeasure6,
                  measure7: result.strMeasure7,
                  measure8: result.strMeasure8,
                  measure9: result.strMeasure9,
                  measure10: result.strMeasure10

                }
                return result;
              })
              this.setState({ drinkArray: results, error: "" })

            }
          })
          .catch(err => this.setState({ error: err.items }));
        console.log(this.state.drinkArray)
        break;

      case "searchIngredientByName":
        event.preventDefault();
        API.searchIngredientByName(this.state.search)
          .then((res) => {
            console.log(res)
            if (res.data.ingredients === "error") {
              throw new Error(res.data.ingredients);
            } else {
              let results = res.data.ingredients
              results = results.map(result => {
                //store each book information in a new object 
                result = {
                  key: result.idIngredient,
                  id: result.idIngredient,
                  title: result.strIngredient,
                  description: result.strDescription
                }
                return result;
              })
              this.setState({ drinkArray: results, error: "" })

            }
          })
          .catch(err => this.setState({ error: err.items }));
        console.log(this.state.drinkArray)
        break;

      case "searchByIngredient":
        event.preventDefault();
        API.searchByIngredient(this.state.search)
          .then((res) => {
            console.log(res)
            if (res.data.drinks === "error") {
              throw new Error(res.data.drinks);
            } else {
              let results = res.data.drinks
              results = results.map(result => {
                //store each book information in a new object 

                result = {
                  key: result.idDrink,
                  id: result.idDrink,
                  title: result.strDrink,
                  img: result.strDrinkThumb,
                  instructions: result.strInstructions,
                  ingredientsArr: [result.strIngredient1, result.strIngredient2, result.strIngredient3],
                  // ingredient2: result.strIngredient2,
                  // ingredient3: result.strIngredient3,
                  // ingredient4: result.strIngredient4,
                  // ingredient5: result.strIngredient5,
                  // ingredient6: result.strIngredient6,
                  // ingredient7: result.strIngredient7,
                  // ingredient8: result.strIngredient8,
                  // ingredient9: result.strIngredient9,
                  // ingredient10: result.strIngredient10,
                  measure1: result.strMeasure1,
                  measure2: result.strMeasure2,
                  measure3: result.strMeasure3,
                  measure4: result.strMeasure4,
                  measure5: result.strMeasure5,
                  measure6: result.strMeasure6,
                  measure7: result.strMeasure7,
                  measure8: result.strMeasure8,
                  measure9: result.strMeasure9,
                  measure10: result.strMeasure10
                }
                return result;
              })
              this.setState({ drinkArray: results, error: "" })

            }
          })
          .catch(err => this.setState({ error: err.items }));
        console.log(this.state.drinkArray)
        break;

      case "random":
        event.preventDefault();
        API.random()
          .then((res) => {
            console.log(res)
            if (res.data.drinks === "error") {
              throw new Error(res.data.drinks);
            } else {
              let results = res.data.drinks
              results = results.map(result => {
                //store each book information in a new object 
                result = {
                  key: result.idDrink,
                  id: result.idDrink,
                  title: result.strDrink,
                  img: result.strDrinkThumb,
                  instructions: result.strInstructions,
                  ingredient1: result.strIngredient1,
                  ingredient2: result.strIngredient2,
                  ingredient3: result.strIngredient3,
                  ingredient4: result.strIngredient4,
                  ingredient5: result.strIngredient5,
                  ingredient6: result.strIngredient6,
                  ingredient7: result.strIngredient7,
                  ingredient8: result.strIngredient8,
                  ingredient9: result.strIngredient9,
                  ingredient10: result.strIngredient10,
                  measure1: result.strMeasure1,
                  measure2: result.strMeasure2,
                  measure3: result.strMeasure3,
                  measure4: result.strMeasure4,
                  measure5: result.strMeasure5,
                  measure6: result.strMeasure6,
                  measure7: result.strMeasure7,
                  measure8: result.strMeasure8,
                  measure9: result.strMeasure9,
                  measure10: result.strMeasure10
                }
                return result;
              })
              this.setState({ drinkArray: results, error: "" })
            }
          })
          .catch(err => this.setState({ error: err.items }));
        console.log(this.state.drinkArray)
        break;

      case "favorites":
        event.preventDefault();
        API.favorites()
          .then((res) => {
            console.log(res)
            if (res.data.drinks === "error") {
              throw new Error(res.data.drinks);
            } else {
              let results = res.data.drinks
              results = results.map(result => {
                //store each book information in a new object 
                result = {
                  key: result.idDrink,
                  id: result.idDrink,
                  title: result.strDrink,
                  img: result.strDrinkThumb,
                  instructions: result.strInstructions,
                  ingredient1: result.strIngredient1,
                  ingredient2: result.strIngredient2,
                  ingredient3: result.strIngredient3,
                  ingredient4: result.strIngredient4,
                  ingredient5: result.strIngredient5,
                  ingredient6: result.strIngredient6,
                  ingredient7: result.strIngredient7,
                  ingredient8: result.strIngredient8,
                  ingredient9: result.strIngredient9,
                  ingredient10: result.strIngredient10,
                  measure1: result.strMeasure1,
                  measure2: result.strMeasure2,
                  measure3: result.strMeasure3,
                  measure4: result.strMeasure4,
                  measure5: result.strMeasure5,
                  measure6: result.strMeasure6,
                  measure7: result.strMeasure7,
                  measure8: result.strMeasure8,
                  measure9: result.strMeasure9,
                  measure10: result.strMeasure10
                }
                return result;
              })
              this.setState({ drinkArray: results, error: "" })
            }
          })
          .catch(err => this.setState({ error: err.items }));
        console.log(this.state.drinkArray)
        break;

      default:

        break;
    }
  }

  render() {
    return (
      <div>


        <Nav />

        <h1 className="text-center m-5"><b>SpeakEasy</b></h1>

        <Search handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} handleSelectChange={this.handleSelectChange} />

        <Container>
          <Results drinks={this.state.drinkArray} searchBy={this.state.searchBy} />
        </Container>

      </div >
    );
  }
}



export default App;
