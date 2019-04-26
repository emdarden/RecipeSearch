import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const styles = {
  root: {
    width: 175,
  },
  slider: {
    padding: '22px 0px',
    margin: '0px  0px 0px 40px',  
  },
};

const theme = createMuiTheme({
  overrides: {
    MuiSlider: {
      track: {
        backgroundColor: '#aaaaaa',
      },

      thumb: {
        backgroundColor: '#aaaaaa',
      }
    },
  },
})


class StepSlider extends Component {
  state = {
    value: this.props.time,
  };

  
  handleChange = (event, value) => {
    this.setState({ value });
    this.props.handler(value);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <Slider
            classes={{ container: classes.slider }}
            value={value}
            min={5}
            max={30}
            step={5}
            onChange={this.handleChange}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepSlider);