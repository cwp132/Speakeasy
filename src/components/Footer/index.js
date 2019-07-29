import React from "react";

import "./style.css"

function Footer(props) {

  return (
    <div className="footer m-3 p-3">
      <h2 className="text-center display-4 mb-3">Developers</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <h5 className="text-center">Cameron Larrabee</h5>
              <p className="text-center">Cameronlarrabee@yahoo.com</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <a href="https://github.com/Larrabee55" target="_blank" rel="noopener noreferrer" className="mx-3 fab fa-github-square"></a>
              <a href="https://www.linkedin.com/in/cameron-larrabee-25a363177/" target="_blank" rel="noopener noreferrer"
                className="mx-3 fab fa-linkedin-square"></a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <h5 className="text-center">Christian Petersen</h5>
              <p className="text-center">Christianwpetersen952@gmail.com</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <a href="https://github.com/cwp132" target="_blank" rel="noopener noreferrer" className="mx-3 fab fa-github-square"></a>
              <a href="https://www.linkedin.com/in/christian-petersen-33198a174/" target="_blank" rel="noopener noreferrer"
                className="mx-3 fab fa-linkedin-square"></a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <h5 className="text-center">Stephan Falcon</h5>
              <p className="text-center">hoobaloob99@gmail.com</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <a href="https://github.com/stephanfalcon" target="_blank" rel="noopener noreferrer" className="mx-3 fab fa-github-square"></a>
              <a href="https://www.linkedin.com/in/stephan-falcon-23033514a/" target="_blank" rel="noopener noreferrer"
                className="mx-3 fab fa-linkedin-square"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;