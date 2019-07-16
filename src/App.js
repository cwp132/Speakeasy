
import React, { Component } from "react";
import { Container } from "./components/Grid";
import Search from "./components/Search";
import Results from './components/Results';
import API from "./utils/API";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import axios from 'axios';

class App extends Component {

  state = {
    search: "",
    searchBy: "",
    drinkArray: [],
    searchedDrink: "",
    searchedInfo: "",
    error: ""
  }

  handleData = event => {
    this.setState({ searchedDrink: event.target.alt })
    console.log(this.state.searchedDrink, event.target.alt)

    // this.searchData()
    event.preventDefault();
    API.modalSearchByName(event.target.alt)
      .then((res) => {

        if (res.data.drinks === "error") {
          throw new Error(res.data.drinks);
        } else {
          let results = res.data.drinks[0]

          var newresults = {
            id: results.idDrink,
            title: results.strDrink,
            img: results.strDrinkThumb,
            instructions: results.strInstructions,
            ingredientsArr: [results.strIngredient1, results.strIngredient2, results.strIngredient3, results.strIngredient4,
            results.strIngredient5, results.strIngredient6, results.strIngredient7, results.strIngredient8, results.strIngredient9,
            results.strIngredient10],
            measureArr: [results.strMeasure1, results.strMeasure2, results.strMeasure3, results.strMeasure4,
            results.strMeasure5, results.strMeasure6, results.strMeasure7, results.strMeasure8, results.strMeasure9,
            results.strIngredient10]

          }
          console.log(results, newresults)
          this.setState({ searchedInfo: newresults, error: "" })

        }
      })
      .catch(err => this.setState({ error: err.items }));

    // if the state matches the event.arget.value no search is needed

    // else if state does not match event target hit the api
  }

  // searchData = event => {
  //   event.preventDefault();
  //   API.modalSearchByName(event.target.alt)
  //     .then((res) => {

  //       if (res.data.drinks === "error") {
  //         throw new Error(res.data.drinks);
  //       } else {
  //         let results = res.data.drinks[0]

  //         var newresults = {
  //           id: results.idDrink,
  //           title: results.strDrink,
  //           img: results.strDrinkThumb,
  //           instructions: results.strInstructions,
  //           ingredientsArr: [results.strIngredient1, results.strIngredient2, results.strIngredient3, results.strIngredient4,
  //           results.strIngredient5, results.strIngredient6, results.strIngredient7, results.strIngredient8, results.strIngredient9,
  //           results.strIngredient10],
  //           measureArr: [results.strMeasure1, results.strMeasure2, results.strMeasure3, results.strMeasure4,
  //           results.strMeasure5, results.strMeasure6, results.strMeasure7, results.strMeasure8, results.strMeasure9,
  //           results.strIngredient10]

  //         }
  //         console.log(results, newresults)
  //         this.setState({ searchedInfo: newresults, error: "" })

  //       }
  //     })
  //     .catch(err => this.setState({ error: err.items }));
  // }

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
                  id: result.idDrink,
                  title: result.strDrink,
                  img: result.strDrinkThumb
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
                  id: result.idDrink,
                  title: result.strDrink,
                  img: result.strDrinkThumb,

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
                  id: result.idDrink,
                  title: result.strDrink,
                  img: result.strDrinkThumb
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
                  id: result.idDrink,
                  title: result.strDrink,
                  img: result.strDrinkThumb
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
      <>
        <Container>
          <Jumbotron />
        </Container>

        <Container>
          <Search handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} handleSelectChange={this.handleSelectChange} />
        </Container>

        <Container>
          <Results drinks={this.state.drinkArray} searchBy={this.state.searchBy} handleData={this.handleData} searchedInfo={this.state.searchedInfo} />
        </Container>

        <Footer />
      </>
    );
  }
}



export default App;
