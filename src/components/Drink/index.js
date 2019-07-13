import React from 'react';
import db from "../../models/index"
import axios from "axios"



function addFav(drink){
  // console.log(drink)
  
  // db.User.findOne({user_name:"new"})
  // .then(function(res){
  //   console.log(res)
  // })
  axios.post("/favorite",{drink:drink})
}

function Drink(props) {
  var buttonStyle = {
    margin:"10px",
    borderRadius:"50px"
  }
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 p-3" id={props.drink.id}>
      <h4 className="text-center">{props.drink.title}</h4>
      <div className="d-flex justify-content-center">
        <img src={props.drink.img} alt={props.drink.title} data-toggle="modal" data-target={`.modal-${props.drink.id}`} />

        <div className={`modal fade modal-${props.drink.id}`} tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="text-center">{props.drink.title}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 d-flex justify-content-center">
                    <img src={props.drink.img} alt={props.drink.title} />
                  </div>

                  <div className="col-md-4 d-flex justify-content-center">
                    <ul>
                      {props.drink.ingredientsArr.map((ingredient) => {
                        return (
                          <li>{ingredient}</li>
                        )
                      })}
                    </ul>

                  </div>

                  <div className="col-md-4 d-flex justify-content-center">
                    <p>{props.drink.instructions}</p>
                  </div>
 
                </div>
                <div className="row">
                  <div className="col-md-11">

                  </div>
                  <div className="col-md-1">
                    <button style={buttonStyle} className="btn btn-danger" onClick={()=>addFav(props.drink)}><i class="fas fa-heart" ></i></button>
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