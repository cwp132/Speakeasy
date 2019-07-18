
import axios from "axios"
import React, { Component } from "react";
import "./style.css";


// function addFav(drink){
//   // console.log(drink)
  
//   // db.User.findOne({user_name:"new"})
//   // .then(function(res){
//   //   console.log(res)
//   // })
//   axios.post("/favorite",{drink:drink})
// }

// function Drink(props) {
//   var buttonStyle = {
//     margin:"10px",
//     borderRadius:"50px"
//   }


class Drink extends Component {
  addFav = (drink)=>{
      // console.log(drink)
      
      // db.User.findOne({user_name:"new"})
      // .then(function(res){
      //   console.log(res)
      // })
      console.log(this.props.handleData)
      axios.post("/favorite",{drink:drink})
    }


    render() {
    const { searchedInfo } = this.props

      var buttonStyle = {
        margin:"10px",
        borderRadius:"50px"
      }

    return (
      <div className="col-lg-4 col-md-6 col-sm-12 p-3" id={this.props.drink.id}>
        <h4 className="text-center">{this.props.drink.title}</h4>
        <div className="d-flex justify-content-center">
          <img src={this.props.drink.img} alt={this.props.drink.title} onClick={this.props.handleData} data-toggle="modal" data-target={`.modal-${this.props.drink.id}`} />

          <div className={`modal fade modal-${this.props.searchedInfo.id}`} tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content p-4">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h1 className="text-center">{this.props.searchedInfo.title}</h1>
                    </div>

                  </div>
 
                {/* </div>
                <div className="row">
                  <div className="col-md-11">

                  </div>
                  <div className="col-md-1">
                    <button style={buttonStyle} className="btn btn-danger" onClick={()=>addFav(props.drink)}><i class="fas fa-heart" ></i></button> */}
                  <div className="row">
                    <div className="col-md-3 d-flex justify-content-center">
                      <img src={this.props.searchedInfo.img} alt={this.props.searchedInfo.title} />
                    </div>

                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                          <h4 className="text-center"><u>Ingredients</u></h4>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                          <div id="ingredientsList">
                            {searchedInfo && searchedInfo.ingredientsArr.map((ingredient, index) => {

                              if (ingredient === "") {
                                return (<></>)
                              } else {
                                return (
                                  <div className="text-center" key={index}> {ingredient}</div>
                                )
                              }
                            })}
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                          <h4><u>Measurements</u></h4>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                          <div id="measureList">
                            {searchedInfo && searchedInfo.measureArr.map((measure, index) => {
                              if (measure === " ") {
                                return (<></>)
                              } else if (measure === "↵") {
                                return (<></>)
                              } else if (measure === "") {
                                return (<></>)
                              } else {
                                return (
                                  <div className="text-center" key={index}>{measure}</div>
                                )
                              }

                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                          <h4><u>Instuctions</u></h4>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                          <p className="text-center">{this.props.searchedInfo.instructions}</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="row">
                                    <div className="col-md-11"></div>
                                    <div className="col-md-1">
                                        <button className="btn btn-danger button" style={buttonStyle} onClick={()=>this.addFav(this.props.searchedInfo)}><i class="fas fa-heart" ></i></button>
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
}



export default Drink