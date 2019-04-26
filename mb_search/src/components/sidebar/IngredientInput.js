import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import IngredientList from './IngredientList';

const styles = theme => ({  
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: '0px',
    width: 125,
    left: '20px',
  },  
});

function IngredientInput(props) {
    const { classes } = props;
    
    return (
        <div className={classes.container}>
            <Input
              placeholder="e.g. avocado"
              className={classes.input}
              inputProps={{
              'aria-label': 'Description',
              }}
              onChange={props.onChange}
              value={props.value}
            />
            <IngredientList ingredients={props.ingredients} handlerRemove={props.handlerRemove}/>
        </div>
    )
};

IngredientInput.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(IngredientInput);
