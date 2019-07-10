import React, { Component } from "react";
import "./style.css"
// import { Container } from "../Grid";
import Drink from "../Drink";


class Results extends Component {


  render() {
    switch (this.props.searchBy) {
      case "searchByName":
        return <div className="row">
          {this.props.drinks.map((drink) => {
            return (
              <Drink drink={drink} key={drink.id} />
            )
          })}
        </div>
      case "searchByIngredient":
        return <div className="row">
          {this.props.drinks.map((drink) => {
            return (
              <Drink drink={drink} key={drink.id} />
            )
          })}
        </div>

      case "searchIngredientByName":
        return <div className="row">
          {this.props.drinks.map((drink) => {
            return (
              <div className="col-lg-12 col-md-12 col-sm-12 p-3" id={drink.id} key={drink.id}>
                <h4 className="text-center">{drink.title}</h4>
                <p>{drink.description}</p>
              </div>
            )
          })}
        </div>

      case "random":
        return <div className="row">
          {this.props.drinks.map((drink) => {
            return (
              <Drink drink={drink} key={drink.id} />
            )
          })}
        </div>

      default:
        return <div className="col-md-12 text-center">
          <h1>Search for some Great Drinks!</h1>
        </div>
    }
  }
}
export default Results
  //     </div >
  // < input id = "search" ></input >
  //   <button onClick={() => this.searchDatabase(document.getElementById("search").value)}>button</button>
  //   <div className="drinks">
  //     <this.drinkRenderer />
  //   </div>