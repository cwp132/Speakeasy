import React from "react";
import axios from 'axios';
import "./style.css";
class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logged: "",
      logOut: "hidden",
    }
    this.checkState = this.checkState.bind(this);
  }

  logOut = (event) => {
    event.preventDefault();
    axios.get('/logout')
      .then(function (res, req) {
        window.location.reload();
      })
      .catch(function (err) {
        console.log(err);
      })
  }

  // handleClick(event) {
  //   this.checkState();
  // };

  componentDidMount = (e) => {
    this.checkState();
  }

  checkState = (e) => {
    axios.get('/logged')
      .then((req, res) => {
        if (req.data !== "") {
          console.log("State should change")
          console.log(req.data);
          this.setState({ logged: "hidden", logOut: "" });
        } else {
          console.log('not logged')
        }
        // console.log(req.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  // getUser = (event) => {

  // }
  // clickHandle = (user,password) => {
  //   axios.post("/create",{

  //   })
  // }
  

  render() {

    return (
      < div >

        <ul className="nav">

          <li className="nav-item">
            <button type="button" hidden={this.state.logged} className="btn text-body mr-3" data-toggle="modal" data-target="#loginModal">

              Log In
            </button>

            <button type="button" onClick={this.logOut} hidden={this.state.logOut} id="logout" className="btn text-body mr-3" >
              log out
            </button>

            <button type="button" hidden={this.state.logged} className="btn text-body mr-3" data-toggle="modal" data-target="#createModal">

              Create Login
            </button>

            {/* <button type="button" className="btn btn-info float-right" onClick={() => this.handleClick} >
              Change State
            </button> */}

            {/* <button type="button" className="btn btn-info float-right" onClick={() => this.checkState()} >
              Check State
            </button> */}

            <div className="modal fade" id="createModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Create Login</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form action="/create" method="POST">
                      <div>
                        <label>Username:</label>
                        <input type="text" name="username" />
                      </div>
                      <div>
                        <label>Password:</label>
                        <input type="password" name="password" />
                      </div>
                      <div>
                        <input type="submit" value="Create Login" />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModal"
              aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                    <button type="button" data-dismiss="modal" className="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form action="/login" method="post">
                      <div>
                        <label>Username:</label>
                        <input type="text" name="username" />
                      </div>
                      <div>
                        <label>Password:</label>
                        <input type="password" name="password" />
                      </div>
                      <div>
                        <input type="submit" value="Log In" />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div >
    );
  }
}
export default Nav;
