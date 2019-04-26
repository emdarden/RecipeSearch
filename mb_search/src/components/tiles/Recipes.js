import React, { Component } from 'react';
import RecipeTile from "./RecipeTile";
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
});

class Recipes extends Component {

  getTiles = () => {
    if(Array.isArray(this.props.recipes)){
      return this.props.recipes.map(recipe => (<RecipeTile img={recipe.img} title={recipe.name}  url={recipe.url}/>))
    }

  }

  render() {
    return (
        <div className="recipes_container">
          <GridList cellHeight={290} cols={5}>
            {this.getTiles()}
          </GridList>

        </div>
    );
  }
}

export default withStyles(styles)(Recipes);