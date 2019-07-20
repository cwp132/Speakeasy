
import axios from "axios"
import React, { Component } from "react";
import Modal from "../Modal";
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
      axios.post("/favorite",{drink:drink})
    }

  render() {
    // console.log(this.props.drink)
    // const { searchedInfo } = this.props
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 py-3" id={this.props.drink.id} key={this.props.drink.id}>
        <h4 className="text-center">{this.props.drink.title}</h4>
        <div className="d-flex justify-content-center">
          <img src={this.props.drink.img} alt={this.props.drink.title} onClick={this.props.handleData} data-toggle="modal" data-target={`.modal-${this.props.drink.id}`} />

          <div className={`modal fade modal-${this.props.drink.id}`} tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
            <Modal searchedInfo={this.props.searchedInfo} key={this.props.searchedInfo.id} />
          </div>

        </div>
      </div>
    )
  }
  }

export default Drink