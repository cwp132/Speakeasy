import React, {Component} from "react";
import "./style.css";



class Search extends Component{

  componentDidMount(){
    this.props.searchMount()
  }

  render(){
    return(
      <div className="backgroundRow">
      <div className="container my-4">
        <div className="row">
          <div className="col-md-2">
          </div>
          <div className="col-md-8">
            <form>
              <div className="input-group mb-3">
                <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Search"
                  onChange={this.props.handleInputChange} value={this.props.search} />
                <div className="input-group-append">
                  <select className="custom-select" onChange={this.props.handleSelectChange}>
                    {/* <option defaultValue>Choose What to Search By!</option> */}
                    <option value="searchByName">Search Drink by Name</option>
                    {/* <option value="searchIngredientByName">Search Ingredient by Name</option> */}
                    <option value="searchByIngredient">Search by Ingredient</option>
                    <option value="random">Random</option>
                    <option value="favorites">Favorites</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn btn-md btn-block srchBtn" onClick={this.props.handleFormSubmit}>Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  }
}



// function Search(this.props) {
  
//   return (
//     <div className="backgroundRow">
//       <div className="container my-4">
//         <div className="row">
//           <div className="col-md-2">
//           </div>
//           <div className="col-md-8">
//             <form>
//               <div className="input-group mb-3">
//                 <input type="text" className="form-control" aria-label="Text input with dropdown button" placeholder="Search"
//                   onChange={this.props.handleInputChange} value={this.props.search} />
//                 <div className="input-group-append">
//                   <select className="custom-select" onChange={this.props.handleSelectChange}>
//                     {/* <option defaultValue>Choose What to Search By!</option> */}
//                     <option value="searchByName">Search Drink by Name</option>
//                     <option value="searchIngredientByName">Search Ingredient by Name</option>
//                     <option value="searchByIngredient">Search by Ingredient</option>
//                     <option value="random">Random</option>
//                     <option value="favorites">Favorites</option>
//                   </select>
//                 </div>
//               </div>
//               <button type="submit" className="btn btn-md btn-block srchBtn" onClick={this.props.handleFormSubmit}>Search</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default Search;
