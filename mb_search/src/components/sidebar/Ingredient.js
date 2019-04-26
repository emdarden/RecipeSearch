import React, { Component } from 'react';

class Ingredient extends Component {

  render() { 
    return (
      <div className="ingredient">
        <button className="removebtn" onClick={() => this.props.handler(this.props.ingredient)} >X</button>
        <p>{this.props.ingredient}</p>
      </div>
    );
  }
}

export default Ingredient;