import React from "react";
import "./style.css"


function Search(props) {
  return (
    <div className="row backgroundRow p-5 m-5">
      <div className="container my-4">
        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col-md-8">
            {/* <h2>Book Search</h2>
      <br></br>
      <h4>book</h4> */}
            {/* <div className="row">
        <div className="col-md-12"> */}
            <form>
              <input class="form-control" type="text" placeholder="Search"></input>
              <button type="submit" class="btn btn-secondary btn-md btn-block" onClick={props.handleFormSubmit}>Search</button>
            </form>
            {/* </div>
      </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Search;