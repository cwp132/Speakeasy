import React, { Component } from "react"
import Drink from './drink'
import axios from 'axios'

class body extends Component{
    state = {drinkArray:[]}
    
    searchDatabase = (query = "margarita", qType = "s") => {
        axios.get(`https://www.thecocktaildb.com/api/json/v2/8673533/search.php?${qType}=${query}`)
        .then((res) =>{
            console.log(res);
            this.setState({
                drinkArray:res.data.drinks})
        })
    }

    drinkRenderer = () => {
        
        if(this.state.drinkArray==null){
            return (
                <div>
                    <h4>sorry we couldn't find anything</h4>
                </div>
            )
        }else{
            let arr = this.state.drinkArray.map(
                drink =>  <Drink title={drink.strDrink} img={drink.strDrinkThumb} />)
            return (
            <div className="row">
                {arr}
            </div>
            )
        }
    }

    render(){
        
            return( 
                <div className="">
                    <input id="search"></input>
                    <button onClick={()=>this.searchDatabase(document.getElementById("search").value)}>button</button>
                    <div className="drinks">
                        <this.drinkRenderer/>
                    </div>
                </div>
            )
    } 
}

export default body