import React from "react";

function Nav(props) {
  return (
    < div >

      <ul className="nav nav-pills p-3 ">
        <li className="nav-item">
          <a className="nav-link" href="#">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Favorite</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
      </ul>
    </div >
  );
}
export default Nav;