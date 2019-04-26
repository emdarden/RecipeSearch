function getData() {

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

getData().then(function(recipes){
  ///console.log(recipes.length);
  //from here send to main functions that will use recipes
  recipeData(recipes);
});

function recipeData(data){
  //console.log(data);
  return data;
}

function search(obj1){
  var time = obj1.time;
  var categories = obj1.category;
  var ingredients = obj1.ingredients;

  getData().then(function(recipes) {
    var arr = recipes.filter(recipe => (recipe.time <= time && filterCategory(recipe, categories) && filterIngredients(recipe, ingredients)));
    //console.log(arr);
  })

}

getData().then(function(recipes){
  var categories = []
  var catarr = ["Breakfast", "Dinner", "Snack", "Appetizer", "Dessert", "Sauce", "Soup", "Beverage", "Side"]

  recipes.forEach(recipe => {
    if(!categories.includes(recipe.category)){
      categories.push(recipe.category);
    }
  });

  var res = categories.filter((cat) => {
    catArray = cat.split(", ");
    var val = false

    catArray.forEach(i => {
      if(!catarr.includes(i)){
    
        console.log(i)
        
        val = true;
      }
    })

    return val;
  })

  console.log(res)
})

//Check categories
function filterCategory(recipe, categories){
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

function filterIngredients(recipe, ingredients){
  var recipeIngreds = recipe.ingredients;
  var result = true;

  ingredients.forEach(i => {
    if(!containsWord(i, recipeIngreds)){
      result = false;
    }
  })

  return result;

}

function containsWord(word, ingredients){
  var result = false;
  ingredients.forEach(i => {
    if(i.includes(word)){
      result = true;
    }
  })

  return result;
}


var obj = {time: 5, category: ["Dessert"], ingredients: ["banana"]}
//search(obj);
