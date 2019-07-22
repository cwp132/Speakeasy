
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
    const imageCover = {
      backgroundImage:`linear-gradient(transparent,transparent,red),url(${this.props.drink.img})`,
      backgroundPosition: 'center',
      backgroundColor:'red'
    }
    const blank = {
      blank: " "
    }
    // console.log(this.props.drink)
    // const { searchedInfo } = this.props
    return (
      <div className="col-lg-3 col-md-5 col-sm-12 py-4 m-4 drinkDiv bg" id={this.props.drink.id} key={this.props.drink.id}>
        <h4 className="text-center">{this.props.drink.title}</h4>
        <div className="d-flex justify-content-center">
          <img className={"img"} style={imageCover} src = {blank.blank} data-title={this.props.drink.title} alt={blank.blank} onClick={this.props.handleData} data-toggle="modal" data-target={`.modal-${this.props.drink.id}`}/>

          <div className={`modal fade modal-${this.props.drink.id}`} tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
            <Modal searchedInfo={this.props.searchedInfo} key={this.props.searchedInfo.id} />
          </div>
        </div>
      </div>
    )
  }
}
export default Drink