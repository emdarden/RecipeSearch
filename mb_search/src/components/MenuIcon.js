import React, { Component } from 'react';
import SideBar from './sidebar/SideBar';

class MenuIcon extends Component {
    state = {
        shown: false,
    }
  
    changeIcon = () => {
      var div = document.getElementsByClassName("menu");
      div[0].classList.toggle("change");

      if(this.state.shown === false){
          this.openMenu();
          this.setState({shown: true})
      } else {
          this.closeMenu();
          this.setState({shown: false})
      }
    } 
  
    openMenu = () => {
        var side = document.getElementsByClassName("sidebar");
        side[0].style.right = "-75px"

        var menu = document.getElementsByClassName("menu")
        menu[0].style.right ="115px";
    }

    closeMenu = () => {
        var side = document.getElementsByClassName("sidebar");
        side[0].style.right = "250px"

        var menu = document.getElementsByClassName("menu")
        menu[0].style.right = "";
    }

  render() {
    return (
        <div className="menu" onClick={() => this.changeIcon()}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    );
  }
}

export default MenuIcon;