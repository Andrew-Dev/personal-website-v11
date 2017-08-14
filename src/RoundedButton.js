import React, { Component } from 'react';
import Button from './Button'

class RoundedButton extends Component {
  style = {
    'border-radius':'32px',
  }

  render() {
    return (
        <Button style={this.style} text={this.props.text}/>
    )
  }
}

export default RoundedButton