import React, { Component } from 'react';
import Ingredient from './Ingredient'

class IngredientList extends Component {

  render() {
    return (
      <div className="IngredientList">
        {this.props.ingredients.map((ingred) => (
          <Ingredient ingredient={ingred} handler={this.props.handlerRemove}/>
        ))}
      </div>
    );
  }
}

export default IngredientList;