import React, { Component } from 'react';

class RecipeTile extends Component {

  render() {
    return (
        <div className="tile">
            <a href={this.props.url} target="_blank">
                <img alt="" src={this.props.img}></img>
                <p>{this.props.title}</p>
            </a>
        </div>
    );
  }
}

export default RecipeTile;