import React, { Component } from 'react';

class Search extends Component {

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
    var cats = this.getCatArray(categories);

    this.getData().then(function(recipes) {
      var arr = recipes.filter(recipe => (recipe.time <= time && (() => this.filterCategory(recipe, cats)) && (() => this.filterIngredients(recipe, ingredients))));
      console.log(arr[0]);

      (this.props.searchResults(arr));
    })

  }

  //Check categories
  filterCategory = (recipe, categories) =>{
    var cats = recipe.category.split(", ");
    //console.log(cats);
    //console.log(categories);

    var filt = false;
    cats.forEach(cat => {
      if(categories.includes(cat)){
        filt = true;
      }
    })

    return filt;
  }

  filterIngredients = (recipe, ingredients) =>{
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

  render(){
    return (
      <div>
        {() => this.search(this.props.time, this.props.categories, this.props.ingredients)}
      </div>
      
    )
  }

}

export default Search;