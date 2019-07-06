import React from "react";
import axios from 'axios';
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  getUser = () => {
    // Make a request for a user with a given ID
    this.event.preventDefault();
    axios.get('/login')
      .then(function (res, req) {

        console.log(req.session);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  handleClick() {
    // this.getUser();
    // this.setState(prevState => ({
    //   isToggleOn: !prevState.isToggleOn
    // }));
    axios.get('/logout')
      .then(function (res, req) {

      })
      .catch(function (err) {
        console.log(err);
      })
  }

  render() {

    return (
      < div >

        <ul className="nav">

          <li className="nav-item">
            <button type="button" className="btn btn-info float-right" data-toggle="modal" data-target="#exampleModal">
              {this.state.isToggleOn ? 'Log In' : 'Sign Out'}
            </button>

            <button type="button" id="logout" onClick={this.handleClick} action="/logout" method="post" className="btn btn-info float-right" >
              log out
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
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