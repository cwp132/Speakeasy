(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(48)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),s=a(3),o=a(4),i=a(6),m=a(5),d=a(7);function u(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}a(25);var h=function(e){return r.a.createElement("div",{className:"backgroundRow p-5 m-5"},r.a.createElement("div",{className:"container my-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"}),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("form",null,r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control","aria-label":"Text input with dropdown button",placeholder:"Search",onChange:e.handleInputChange,value:e.search}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("select",{className:"custom-select",onChange:e.handleSelectChange},r.a.createElement("option",{defaultValue:!0},"Choose What to Search By!"),r.a.createElement("option",{value:"searchByName"},"Search Drink by Name"),r.a.createElement("option",{value:"searchIngredientByName"},"Search Ingredient by Name"),r.a.createElement("option",{value:"searchByIngredient"},"Search by Ingredient"),r.a.createElement("option",{value:"random"},"Random"),r.a.createElement("option",{value:"favorites"},"Favorites")))),r.a.createElement("button",{type:"submit",className:"btn btn-md btn-block",onClick:e.handleFormSubmit},"Search"))))))},p=(a(26),a(27),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.searchedInfo;return r.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12 p-3",id:this.props.drink.id},r.a.createElement("h4",{className:"text-center"},this.props.drink.title),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("img",{src:this.props.drink.img,alt:this.props.drink.title,onClick:this.props.handleData,"data-toggle":"modal","data-target":".modal-".concat(this.props.drink.id)}),r.a.createElement("div",{className:"modal fade modal-".concat(this.props.searchedInfo.id),tabIndex:"-1",role:"dialog","aria-labelledby":"myExtraLargeModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-xl"},r.a.createElement("div",{className:"modal-content p-4"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",{className:"text-center"},this.props.searchedInfo.title))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 d-flex justify-content-center"},r.a.createElement("img",{src:this.props.searchedInfo.img,alt:this.props.searchedInfo.title})),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 d-flex justify-content-center"},r.a.createElement("h4",{className:"text-center"},r.a.createElement("u",null,"Ingredients")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 d-flex justify-content-center"},r.a.createElement("div",{id:"ingredientsList"},e&&e.ingredientsArr.map(function(e,t){return""===e?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",{className:"text-center",key:t}," ",e)}))))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 d-flex justify-content-center"},r.a.createElement("h4",null,r.a.createElement("u",null,"Measurements")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 d-flex justify-content-center"},r.a.createElement("div",{id:"measureList"},e&&e.measureArr.map(function(e,t){return" "===e?r.a.createElement(r.a.Fragment,null):"\u21b5"===e?r.a.createElement(r.a.Fragment,null):""===e?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",{className:"text-center",key:t},e)}))))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 d-flex justify-content-center"},r.a.createElement("h4",null,r.a.createElement("u",null,"Instuctions")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 d-flex justify-content-center"},r.a.createElement("p",{className:"text-center"},this.props.searchedInfo.instructions)))))))))))}}]),t}(n.Component)),g=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;switch(this.props.searchBy){case"searchByName":return r.a.createElement("div",{className:"row mb-5"},this.props.drinks.map(function(t,a){return r.a.createElement(p,{handleData:e.props.handleData,searchedInfo:e.props.searchedInfo,drink:t,key:a})}));case"searchByIngredient":return r.a.createElement("div",{className:"row mb-5"},this.props.drinks.map(function(t,a){return console.log(e.props),r.a.createElement(p,{handleData:e.props.handleData,searchedInfo:e.props.searchedInfo,drink:t,key:a})}));case"searchIngredientByName":return r.a.createElement("div",{className:"row mb-5"},this.props.drinks.map(function(e,t){return r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 p-3",id:e.id,key:t},r.a.createElement("h4",{className:"text-center"},e.title),r.a.createElement("p",null,e.description))}));case"random":return r.a.createElement("div",{className:"row mb-5"},this.props.drinks.map(function(t,a){return r.a.createElement(p,{handleData:e.props.handleData,searchedInfo:e.props.searchedInfo,drink:t,key:a})}));case"favorites":return r.a.createElement("div",{className:"row mb-5"},this.props.drinks.map(function(e,t){return r.a.createElement(p,{drink:e,key:t})}));default:return r.a.createElement("div",{className:"row mb-5"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("h1",null,"Search for some Great Drinks!")))}}}]),t}(n.Component),E=a(2),f=a.n(E),v={searchByName:function(e){return f.a.get("https://www.thecocktaildb.com/api/json/v2/8673533/search.php?s="+e)},modalSearchByName:function(e){return f.a.get("https://www.thecocktaildb.com/api/json/v2/8673533/search.php?s="+e)},searchIngredientByName:function(e){return f.a.get("https://www.thecocktaildb.com/api/json/v2/8673533/search.php?i="+e)},searchByIngredient:function(e){return f.a.get("https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?i="+e)},random:function(){return f.a.get("https://www.thecocktaildb.com/api/json/v2/8673533/random.php")},favorites:function(e){return f.a.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+e)}},b=a(8),N=(a(45),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).logOut=function(e){e.preventDefault(),f.a.get("/logout").then(function(e,t){window.location.reload()}).catch(function(e){console.log(e)})},a.componentDidMount=function(e){a.checkState()},a.checkState=function(e){f.a.get("/logged").then(function(e,t){""!==e.data?(console.log("State should change"),console.log(e.data),a.setState({logged:"hidden",logOut:""})):console.log("not logged")}).catch(function(e){console.log(e)})},a.state={logged:"",logOut:"hidden"},a.checkState=a.checkState.bind(Object(b.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{type:"button",hidden:this.state.logged,className:"btn text-body mr-3","data-toggle":"modal","data-target":"#loginModal"},"Log In"),r.a.createElement("button",{type:"button",onClick:this.logOut,hidden:this.state.logOut,id:"logout",className:"btn text-body mr-3"},"log out"),r.a.createElement("button",{type:"button",hidden:this.state.logged,className:"btn text-body mr-3","data-toggle":"modal","data-target":"#createModal"},"Create Login"),r.a.createElement("div",{className:"modal fade",id:"createModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Create Login"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("form",{action:"/create",method:"post"},r.a.createElement("div",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username"})),r.a.createElement("div",null,r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password"})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",value:"Create Login"})))),r.a.createElement("div",{className:"modal-footer"})))),r.a.createElement("div",{className:"modal fade",id:"loginModal",tabindex:"-1",role:"dialog","aria-labelledby":"loginModal","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Login"),r.a.createElement("button",{type:"button","data-dismiss":"modal",className:"close","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("form",{action:"/login",method:"post"},r.a.createElement("div",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username"})),r.a.createElement("div",null,r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password"})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",value:"Log In"})))),r.a.createElement("div",{className:"modal-footer"})))))))}}]),t}(r.a.Component));a(46);var k=function(e){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid p-5"},r.a.createElement("h1",{className:" display-1"},r.a.createElement("b",null,"SpeakEasy")),r.a.createElement("p",{className:"lead"},"A cocktail app to look up and try new drinks! You can search by name or ingredient! click on the drink to get all the ingredients, measurements, and instructions"),r.a.createElement("hr",{className:""}),r.a.createElement("p",null,"Get logged in so you can save some of you favorite drinks!"),r.a.createElement(N,null))};a(47);var y=function(e){return r.a.createElement("div",{className:"footer m-3 p-3"},r.a.createElement("h2",{className:"text-center display-4 mb-3"},"Developers"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h5",{className:"text-center"},"Cameron Larrabee"),r.a.createElement("p",{className:"text-center"},"Cameronlarrabee@yahoo.com"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 d-flex justify-content-center"},r.a.createElement("a",{href:"https://github.com/Larrabee55",target:"_blank",rel:"noopener noreferrer",className:"mx-3 fa fa-github-square"}),r.a.createElement("a",{href:"https://www.linkedin.com/in/cameron-larrabee-25a363177/",target:"_blank",rel:"noopener noreferrer",className:"mx-3 fa fa-linkedin-square"})))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h5",{className:"text-center"},"Christian Petersen"),r.a.createElement("p",{className:"text-center"},"Christianwpetersen952@gmail.com"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 d-flex justify-content-center"},r.a.createElement("a",{href:"https://github.com/cwp132",target:"_blank",rel:"noopener noreferrer",className:"mx-3 fa fa-github-square"}),r.a.createElement("a",{href:"https://www.linkedin.com/in/christian-petersen-33198a174/",target:"_blank",rel:"noopener noreferrer",className:"mx-3 fa fa-linkedin-square"})))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h5",{className:"text-center"},"Stephan Falcon"),r.a.createElement("p",{className:"text-center"},"Email"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 d-flex justify-content-center"},r.a.createElement("a",{href:"https://github.com/stephanfalcon",target:"_blank",rel:"noopener noreferrer",className:"mx-3 fa fa-github-square"}),r.a.createElement("a",{href:"https://www.linkedin.com/in/stephan-falcon-23033514a/",target:"_blank",rel:"noopener noreferrer",className:"mx-3 fa fa-linkedin-square"}))))))},w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={search:"",searchBy:"",drinkArray:[],searchedDrink:"",searchedInfo:"",error:""},a.handleData=function(e){a.setState({searchedDrink:e.target.alt}),console.log(a.state.searchedDrink,e.target.alt),e.preventDefault(),v.modalSearchByName(e.target.alt).then(function(e){if("error"===e.data.drinks)throw new Error(e.data.drinks);var t=e.data.drinks[0],n={id:t.idDrink,title:t.strDrink,img:t.strDrinkThumb,instructions:t.strInstructions,ingredientsArr:[t.strIngredient1,t.strIngredient2,t.strIngredient3,t.strIngredient4,t.strIngredient5,t.strIngredient6,t.strIngredient7,t.strIngredient8,t.strIngredient9,t.strIngredient10],measureArr:[t.strMeasure1,t.strMeasure2,t.strMeasure3,t.strMeasure4,t.strMeasure5,t.strMeasure6,t.strMeasure7,t.strMeasure8,t.strMeasure9,t.strIngredient10]};console.log(t,n),a.setState({searchedInfo:n,error:""})}).catch(function(e){return a.setState({error:e.items})})},a.isLoggedIn=function(){f.a.get("/isLogged").then(function(e,t){console.log("============="),null!==e.user?(this.setState({isLoggedIn:!0}),console.log(this.state.isLoggedIn)):this.setState({isLoggedIn:!1}),console.log(this.state.isLoggedIn)}).catch(function(e){console.log(e)})},a.handleInputChange=function(e){a.setState({search:e.target.value})},a.handleSelectChange=function(e){a.setState({searchBy:e.target.value,drinkArray:[]})},a.handleFormSubmit=function(e){switch(a.state.searchBy){case"searchByName":e.preventDefault(),v.searchByName(a.state.search).then(function(e){if(console.log(e),"error"===e.data.drinks)throw new Error(e.data.drinks);var t=e.data.drinks;t=t.map(function(e){return e={id:e.idDrink,title:e.strDrink,img:e.strDrinkThumb}}),a.setState({drinkArray:t,error:""})}).catch(function(e){return a.setState({error:e.items})}),console.log(a.state.drinkArray);break;case"searchIngredientByName":e.preventDefault(),v.searchIngredientByName(a.state.search).then(function(e){if(console.log(e),"error"===e.data.ingredients)throw new Error(e.data.ingredients);var t=e.data.ingredients;t=t.map(function(e){return e={key:e.idIngredient,id:e.idIngredient,title:e.strIngredient,description:e.strDescription}}),a.setState({drinkArray:t,error:""})}).catch(function(e){return a.setState({error:e.items})}),console.log(a.state.drinkArray);break;case"searchByIngredient":e.preventDefault(),v.searchByIngredient(a.state.search).then(function(e){if(console.log(e),"error"===e.data.drinks)throw new Error(e.data.drinks);var t=e.data.drinks;t=t.map(function(e){return e={id:e.idDrink,title:e.strDrink,img:e.strDrinkThumb}}),a.setState({drinkArray:t,error:""})}).catch(function(e){return a.setState({error:e.items})}),console.log(a.state.drinkArray);break;case"random":e.preventDefault(),v.random().then(function(e){if(console.log(e),"error"===e.data.drinks)throw new Error(e.data.drinks);var t=e.data.drinks;t=t.map(function(e){return e={id:e.idDrink,title:e.strDrink,img:e.strDrinkThumb}}),a.setState({drinkArray:t,error:""})}).catch(function(e){return a.setState({error:e.items})}),console.log(a.state.drinkArray);break;case"favorites":e.preventDefault(),v.favorites().then(function(e){if(console.log(e),"error"===e.data.drinks)throw new Error(e.data.drinks);var t=e.data.drinks;t=t.map(function(e){return e={id:e.idDrink,title:e.strDrink,img:e.strDrinkThumb}}),a.setState({drinkArray:t,error:""})}).catch(function(e){return a.setState({error:e.items})}),console.log(a.state.drinkArray)}},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null,r.a.createElement(k,null)),r.a.createElement(u,null,r.a.createElement(h,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,handleSelectChange:this.handleSelectChange})),r.a.createElement(u,null,r.a.createElement(g,{drinks:this.state.drinkArray,searchBy:this.state.searchBy,handleData:this.handleData,searchedInfo:this.state.searchedInfo})),r.a.createElement(y,null))}}]),t}(n.Component);c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.cf34a92c.chunk.js.map