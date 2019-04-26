import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
        typography: {
            "fontFamily": "\"Gentium Basic\"",
        }
  })

class Categories extends React.Component {
  state = {
    Breakfast: true,
    Dinner: true,
    Snack: true,
    Appetizer: true,
    Dessert: true,
    Sauce: true,
    Soup: true,
    Beverage: true,
  };
  

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    this.props.handler(name, !this.state[name])
  };

  render() {
    return (
        <MuiThemeProvider theme={theme}>
        <FormGroup column className="categories">
            <FormControlLabel
                control={
                    <Checkbox
                    checked={this.state.Breakfast}
                    onChange={this.handleChange('Breakfast')}
                    value="Breakfast"
                    color="primary"
                    className="checkbox"
                  />
                }
                label="breakfast"
            />
            <FormControlLabel
                control={
                    <Checkbox
                    checked={this.state.Dinner}
                    onChange={this.handleChange('Dinner')}
                    value="Dinner"
                    color="primary"
                    className="checkbox"
                  />
                }
                label="dinner"
            />
            <FormControlLabel
                control={
                    <Checkbox
                    checked={this.state.Snack}
                    onChange={this.handleChange('Snack')}
                    value="Snack"
                    color="primary"
                    className="checkbox"
                  />
                }
                label="snack"
            />
            <FormControlLabel
                control={
                    <Checkbox
                    checked={this.state.Appetizer}
                    onChange={this.handleChange('Appetizer')}
                    value="Appetizer"
                    color="primary"
                    className="checkbox"
                  />
                }
                label="appetizer"
            />
            <FormControlLabel
                control={
                    <Checkbox
                    checked={this.state.Dessert}
                    onChange={this.handleChange('Dessert')}
                    value="Dessert"
                    color="primary"
                    className="checkbox"
                  />
                }
                label="dessert"
            />
            <FormControlLabel
                control={
                    <Checkbox
                    checked={this.state.Sauce}
                    onChange={this.handleChange('Sauce')}
                    value="Sauce"
                    color="primary"
                    className="checkbox"
                  />
                }
                label="sauce"
            />
            <FormControlLabel
                control={
                    <Checkbox
                    checked={this.state.Soup}
                    onChange={this.handleChange('Soup')}
                    value="Soup"
                    color="primary"
                    className="checkbox"
                  />
                }
                label="soup"
            />
            <FormControlLabel
                control={
                    <Checkbox
                    checked={this.state.Beverage}
                    onChange={this.handleChange('Beverage')}
                    value="Beverage"
                    color="primary"
                    className="checkbox"
                  />
                }
                label="beverage"
            />
        </FormGroup>
        </MuiThemeProvider>

      
    );
  }
}

export default Categories;