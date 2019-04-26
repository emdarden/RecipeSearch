import React, { Component } from 'react';
import StepSlider from './StepSlider'
import Categories from './Categories';
import IngredientInput from './IngredientInput';


class SideBar extends Component {
    state = {
        time: 30,
        //categories:["Breakfast", "Dinner", "Snack", "Dessert", "Sauce", "Soup", "Beverage"],
        categories: {
            Breakfast: true,
            Dinner: true,
            Snack: true,
            Dessert: true,
            Sauce: true,
            Soup: true,
            Beverage: true,
        },
        ingredients:[],
        input: "",
    }

    handleTimeChange = (time) => {this.setState({time: time}); this.props.setTime(time)};

    /*handleCatChange = (cat, bool) => {
        this.setState({categories: {...this.state.categories, [cat]: bool}})
        this.props.setCategories(this.state.categories)
    }*/
    handleAddIngred = (ingred) => {
        if(ingred !== ""){
            this.setState({ingredients: [...this.state.ingredients, ingred]})
            this.props.setIngredients([...this.state.ingredients, ingred])
            this.setState({input: ""})
        }   
    }

    handleRemoveIngred = (ingred) => {
        this.setState({ingredients: [...this.state.ingredients.filter(i => i !== ingred)]})
        this.props.setIngredients([...this.state.ingredients.filter(i => i !== ingred)])
    }
    
    onChange = (event) => {this.setState({input: event.target.value})}

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
        <div className="sidebar">
            <section id="topbar">
                <div id="topbar_solid"></div>
                <div id="topbar_stripe"></div>
            </section>
            
            <section id="search">
                <p>Ingredients</p>
                <div className="input">
                    <IngredientInput 
                        ingredients={this.state.ingredients} 
                        handlerRemove={this.handleRemoveIngred}
                        onChange={this.onChange}
                        value={this.state.input}/>
                    
                    <button id="addbtn" onClick={() => this.handleAddIngred(this.state.input)}>add</button>
                </div>
            </section>
            
            <section id="categories">
                <p>Categories</p>
                <Categories 
                    categories={this.state.categories} 
                    handler={this.props.handler}/>
            </section>

            <section>
                <p>Time: {this.state.time} mins</p>
                <StepSlider time={this.state.time} handler={this.handleTimeChange}/>
            </section>

            <button id="searchbtn" onClick={() => this.props.search(this.props.time, this.getCatArray(this.props.categories), this.props.ingredients)}>search</button>

            
        </div>
    );
  }
}

export default SideBar;