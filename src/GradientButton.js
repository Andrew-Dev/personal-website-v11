import React, { Component } from 'react';
import Button from './Button'

class GradientButton extends Component {
  gradients = {
    'miami':['#fc00ff','#00dbde'],
    'mtnDew':['#00c3ff','#ffff1c'],
    'gravity':['#0ec1f6','#8823de'],
    'sunset':['#FF4E50','#F9D423'],
    'nebula':['#00467F','#A5CC82'],
    'reef':['#00d2ff','#3a7bd5'],
  }

  assembleGradientString() {
    console.log(this.props)
    const gradient = this.gradients[this.props.gradient]
    const gradStr = 'linear-gradient(135deg, ' + gradient[0] + ', ' + gradient[1] + ')'
    return gradStr
  }

  style = {
    'border-radius':'32px',
    'background':this.assembleGradientString(),
    'border-width':'0px',
    'color':'#FFF',
  }

  render() {
    return (
      <Button style={this.style} text={this.props.text}/>
    )
  }
}

export default GradientButton