import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {

    return (
      < div >

        <ul className="nav">

          <li className="nav-item">
            <button onClick={this.handleClick} type="button" className="btn btn-info float-right" data-toggle="modal" data-target="#exampleModal">
              {this.state.isToggleOn ? 'Logged In' : 'Sign Out'}
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