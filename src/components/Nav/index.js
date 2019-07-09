import React from "react";
import axios from 'axios';
class Nav extends React.Component {
  state = { isloggedIn: false };

  // This binding is necessary to make `this` work in the callback
  // this.handleClick = this.handleClick.bind(this);


  logOut = (event) => {
    event.preventDefault();
    axios.get('/logout')
      .then(function (res, req) {

      })
      .catch(function (err) {
        console.log(err);
      })
  }

  getUser = (event) => {
    // Make a request for a user with a given ID
    event.preventDefault();
    axios.get('/login')
      .then(function (res, req) {

        console.log(req.session);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  // isLoggedIn = () => {
  //   axios.get('/isLogged')
  //     .then(function (req, res) {
  //       // console.log(req.user);
  //       console.log("=============")
  //       if (req.user !== null || undefined) {
  //         this.setState({ isLoggedIn: true });
  //         console.log(this.state.isLoggedIn);
  //       } else {
  //         this.setState({ isLoggedIn: false })
  //       }
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //     })
  // }

  render() {

    return (
      < div >

        <ul className="nav">

          <li className="nav-item">
            <button type="button" className="btn btn-info float-right" data-toggle="modal" data-target="#loginModal">
              Log In
            </button>

            <button type="button" onClick={this.isLoggedIn} className="btn btn-info float-right">
              Check log status
            </button>

            <button type="button" onClick={this.logOut} id="logout" className="btn btn-info float-right" >
              log out
            </button>

            <button type="button" className="btn btn-info float-right" data-toggle="modal" data-target="#createModal">
              Create Login
            </button>

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
                    <form action="/create" method="post">
                      <div>
                        <label>Username:</label>
                        <input type="text" name="username" />
                      </div>
                      <div>
                        <label>Password:</label>
                        <input type="password" name="password" />
                      </div>
                      <div>
                        <input type="submit" onClick={this.handleClick} value="Create Login" />
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
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                        <input type="submit" onClick={this.handleClick} value="Log In" />
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