import React from "react";
import "./style.css"
import axios from "axios"

function addFav(drink){
//   console.log(drink)
  
//   db.User.findOne({user_name:"new"})
//   .then(function(res){
//     console.log(res)
//   })
  axios.post("/favorite",{drink:drink})
}

var buttonStyle = {
        margin:"10px",
        borderRadius:"50px"
      }

function Modal(props) {
    return <div>
        {props.searchedInfo.map((searchedInfo) => {
            return (
                <div className={`modal fade modal-${props.searchedInfo.id}`} tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="container p-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1 className="text-center">{props.searchedInfo.title}</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 d-flex justify-content-center">
                                        <img src={props.searchedInfo.img} alt={props.searchedInfo.title} />
                                    </div>

                                    <div className="col-md-3">
                                        <h4>Ingredients</h4>
                                        <div className="row">
                                            <ul>
                                                {props.searchedInfo.ingredientsArr.map((ingredient, index) => {
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
                                                {props.searchedInfo.measureArr.map((measure, index) => {
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
                                            <p>{props.searchedInfo.instructions}</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-md-11"></div>
                                    <div className="col-md-1">
                                        {/* <button className="btn btn-danger button" onClick={()=>addFav(props.drink)}><i class="fas fa-heart" ></i></button>
                                        <button>poop</button> */}
                                        <h2>hello</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
}
export default Modal;