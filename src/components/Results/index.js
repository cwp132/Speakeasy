import React, { Component } from "react";
import "./style.css"
import Drink from "../Drink";


class Results extends Component {

  render() {
    switch (this.props.searchBy) {
      case "searchByName":
        return <div className="row d-flex justify-content-center">
          {this.props.drinks.map((drink, index) => {
            return (
              <Drink handleData={this.props.handleData} searchedInfo={this.props.searchedInfo} drink={drink} key={index} />
            )
          })}
        </div>
      case "searchByIngredient":
        return <div className="row d-flex justify-content-center">
          {this.props.drinks.map((drink, index) => {
            return (
              <Drink handleData={this.props.handleData} searchedInfo={this.props.searchedInfo} drink={drink} key={index} />
            )
          })}
        </div>

      case "searchIngredientByName":
        return <div className="row">
          {this.props.drinks.map((drink, index) => {
            return (
              <div className="col-lg-12 col-md-12 col-sm-12 p-3" id={drink.id} key={index}>
                <h4 className="text-center">{drink.title}</h4>
                <p>{drink.description}</p>
              </div>
            )
          })}
        </div>

      case "random":
        return <div className="row d-flex justify-content-center">
          {this.props.drinks.map((drink, index) => {
            return (
              <Drink handleData={this.props.handleData} searchedInfo={this.props.searchedInfo} drink={drink} key={index} />

            )
          })}
        </div>

      case "favorites":
        return <div className="row d-flex justify-content-center">
          {this.props.drinks.map((drink, index) => {
            return (
              <Drink drink={drink} key={index} />
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
export default Results;