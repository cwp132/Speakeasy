import React, { Component } from "react";
import axios from "axios"

class Modal extends Component {
  addFav = (drink) => {
    axios.post("/favorite", { drink: drink })
  }
  render() {
    const { searchedInfo } = this.props
    const buttonStyle = {
      margin: "10px",
      borderRadius: "50px"
    }
    return (
      <div className="modal-dialog modal-xl">
        <div className="modal-content p-4">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center">{this.props.searchedInfo.title}</h1>
              </div>
            </div>
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
                <div className="row">
                  <div className="col-md-11"></div>
                  <div className="col-md-1">
                    <button style={buttonStyle} className="btn btn-dark" onClick={() => this.addFav(this.props.searchedInfo)}><i class="fas fa-heart" ></i></button>
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
export default Modal;