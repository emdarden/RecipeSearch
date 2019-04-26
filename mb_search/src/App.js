import React, { Component } from 'react';
import './App.css';
import Recipes from './components/tiles/Recipes';
import SideBar from './components/sidebar/SideBar';
import Header from './components/Header';
import MenuIcon from './components/MenuIcon';
//import Search from './components/Search'

class App extends Component {
  UNSAFE_componentWillMount(){
    this.getData().then((recipes) => {this.setState({data: recipes}); this.setState({searchResult: recipes})})
  }
  state = {
    data: "",
    searchResult: "",
    time: 30,
    ingredients:[],
    categories: {
      Breakfast: true,
      Dinner: true,
      Snack: true,
      Appetizer: true,
      Dessert: true,
      Sauce: true,
      Soup: true,
      Beverage: true,
    },
    input: {},
  }

  handleCatChange = (cat, bool) => {
    this.setState({categories: {...this.state.categories, [cat]: bool}})
  }

  setTime = (time) => {this.setState({time})}
  setIngredients = (ingredients) => {this.setState({ingredients})}

  searchInput = () => {
    //var categories = this.getCatArray(this.state.categories);
    var categories = this.state.categories
    var time = this.state.time;
    var ingredients = this.state.ingredients;
    var input = {time, categories, ingredients}
    return input
  }

  //setData = (data) => {this.setState({data})}

  getData = () => {

    return fetch('http://localhost:8080/')
    .then(function(response){
      return response.json()
    }).then(function(data){
      return data;
    })
    .catch(function(err) {
      console.log("Error", err.stack);
      console.log("Error", err.name);
      console.log("Error", err.message);
    })
}

search = (time, categories, ingredients) => {
  //var cats = this.getCatArray(categories);

  /*this.getData().then((recipes) => {

    var arr = recipes.filter(recipe => { 
      return (recipe.time <= time && (this.filterCategory(recipe, categories)) && (this.filterIngredients(recipe, ingredients)))
    });
    
    //console.log(arr.length)

    this.setState({data: arr});
  })*/
  var recipes = this.state.data;

  var arr = recipes.filter(recipe => { 
    return (recipe.time <= time && (this.filterCategory(recipe, categories)) && (this.filterIngredients(recipe, ingredients)))
  });
  
  console.log(arr.length)

  this.setState({searchResult: arr});

}

//Check categories
filterCategory = (recipe, categories) =>{
  var cats = recipe.category.split(", ");

  var filt = false;
  cats.forEach(cat => {
    if(categories.includes(cat)){
      filt = true;
    }
  })

  return filt;
}

filterIngredients = (recipe, ingredients) =>{

  if(ingredients.length === 0){
    return true;
  }
  var recipeIngreds = recipe.ingredients;
  var result = true;

  ingredients.forEach(i => {
    if(!this.containsWord(i, recipeIngreds)){
      result = false;
    }
  })

  return result;

}

containsWord = (word, ingredients) =>{
  var result = false;
  ingredients.forEach(i => {
    if(i.includes(word)){
      result = true;
    }
  })

  return result;
}

getCatArray = (categories) => {
  var cats = Object.keys(categories);
  var arr = [];
  cats.forEach((cat) => {
    if(categories[cat] === true){
      arr.push(cat)
    }
  })
  return arr;
}


  render() {
    return (
      <div className="App">
        <MenuIcon />
        <Header />
        <div className="flex-container">
          <SideBar 
            setTime={this.setTime} 
            handler={this.handleCatChange} 
            setIngredients={this.setIngredients}
            search={this.search}
            time={() => this.state.time}
            categories={this.state.categories}
            ingredients={this.state.ingredients}/>
          <Recipes recipes={this.state.searchResult}/>
        </div>
      </div>
    );
  }
}

export default App;
