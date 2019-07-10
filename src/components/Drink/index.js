import React from 'react';
import "./style.css"

function Drink(props) {

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 p-3" id={props.drink.id}>
      <h4 className="text-center">{props.drink.title}</h4>
      <div className="d-flex justify-content-center">
        <img src={props.drink.img} alt={props.drink.title} data-toggle="modal" data-target={`.modal-${props.drink.id}`} />

        <div className={`modal fade modal-${props.drink.id}`} tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="container p-4">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="text-center">{props.drink.title}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 d-flex justify-content-center">
                    <img src={props.drink.img} alt={props.drink.title} />
                  </div>

                  <div className="col-md-3">
                    <h4>Ingredients</h4>
                    <div className="row">
                      <ul>
                        {props.drink.ingredientsArr.map((ingredient, index) => {
                          if (ingredient === "") {
                            return (<></>)
                          } else {
                            return (
                              <li key={index}> {ingredient}</li>
                            )
                          }

                        })}
                      </ul>
                    </div>

                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <h4>Measurements</h4>
                    </div>
                    <div className="row">
                      <ul id="measureList">
                        {props.drink.measureArr.map((measure, index) => {
                          if (measure === " ") {
                            return (<></>)
                          } else if (measure === "↵") {
                            return (<></>)
                          } else if (measure === "") {
                            return (<></>)
                          } else {
                            return (
                              <li key={index}>{measure}</li>
                            )
                          }

                        })}
                      </ul>
                    </div>

                  </div>

                  <div className="col-md-3 ">
                    <div className="row">
                      <h4>Instructions</h4>
                      <p>{props.drink.instructions}</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )

}

export default Drink