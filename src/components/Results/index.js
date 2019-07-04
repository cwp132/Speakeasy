import React from "react"
import "./style.css"


function Results(props) {
  switch (props.searchBy) {
    case "searchByName":
      return <div className="row">
        {props.drinks.map((drink, index) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 p-3" id={drink.id} key={index}>
              <h4 className="text-center">{drink.title}</h4>
              <div className="d-flex justify-content-center">
                <img src={drink.img} alt={drink.title} />
              </div>
            </div>

          )
        })}
      </div>
    case "searchByIngredient":
      return <div className="row">
        {props.drinks.map((drink, index) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 p-3" id={drink.id} key={index} >
              <h4 className="text-center">{drink.title}</h4>
              <div className="d-flex justify-content-center">
                <img src={drink.img} alt={drink.title} />
              </div>
            </div>

          )
        })}
      </div>

    case "searchIngredientByName":
      return <div className="row">
        {props.drinks.map((drink, index) => {
          return (
            <div className="col-lg-12 col-md-12 col-sm-12 p-3" id={drink.id} key={index}>
              <h4 className="text-center">{drink.title}</h4>
              <p>{drink.description}</p>
            </div>
          )
        })}
      </div>

    case "random":
      return <div className="row">
        {props.drinks.map((drink, index) => {
          return (
            <>
              <div className="col-lg-4 col-md-6 col-sm-6 p-3" id={drink.id} key={index}>
                <h4 className="text-center">{drink.title}</h4>
                <div className="d-flex justify-content-center">
                  <img src={drink.img} alt={drink.title} />
                </div>
              </div>
              <div className="col-lg-4 col-md-3 col-sm-3 p-3" key={drink.title}>
                <h3 className="text-center">Ingredients</h3>
                <ul>
                  <li>{drink.ingredient1} - {drink.measure1}</li>
                  <li>{drink.ingredient2} - {drink.measure2}</li>
                  <li>{drink.ingredient3} - {drink.measure3}</li>
                  <li>{drink.ingredient4} - {drink.measure4}</li>
                  <li>{drink.ingredient5} - {drink.measure5}</li>
                  <li>{drink.ingredient6} - {drink.measure6}</li>
                  <li>{drink.ingredient7} - {drink.measure7}</li>
                  <li>{drink.ingredient8} - {drink.measure8}</li>
                  <li>{drink.ingredient9} - {drink.measure9}</li>
                  <li>{drink.ingredient10} - {drink.measure10}</li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-3 col-sm-3 p-3">
                <h3 className="text-center">Instructions</h3>
                <p className="text-center">{drink.instructions}</p>
              </div>
            </>
          )
        })}

      </div>
    default:
      return <div className="col-md-12 text-center">
        <h1>Search for some Great Drinks!</h1>
      </div>
  }
}
export default Results
  //     </div >
  // < input id = "search" ></input >
  //   <button onClick={() => this.searchDatabase(document.getElementById("search").value)}>button</button>
  //   <div className="drinks">
  //     <this.drinkRenderer />
  //   </div>