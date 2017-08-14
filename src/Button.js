import React, { Component } from 'react';
import './buttons.css'
import './GradientButton.css'
import Ripple from 'react-material-ripple'

class Button extends Component {

  rippleCSS = {
    'box-shadow':'0 2px 5px 0 rgba(0, 0, 0, 0.26)',
    'transition': 'box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    'color': 'grey',
  }

  componentWillMount() {
    this.rippleCSS = Object.assign(this.rippleCSS,this.props.style);
  }

  

  render() {
    return (
      <div className="buttonContainer">
        <Ripple style={this.rippleCSS}>
          <button className="button" style={this.props.style}>
            { this.props.text }
          </button>
        </Ripple>
      </div>
    );
  }
}

export default Button