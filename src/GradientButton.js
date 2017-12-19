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

  componentWillMount() {
    this.style = {
      'border-radius':'32px',
      'background':this.assembleGradientString(),
      'border-width':'0px',
      'color':'#FFF',
    }
    if(this.props.center) {
      Object.assign(this.style,{
        'display': 'block',
        'margin': '0 auto',
        'width':'fit-content'
      })
    }
  }

  assembleGradientString() {
    console.log(this.props)
    const gradient = this.gradients[this.props.gradient]
    const gradStr = 'linear-gradient(135deg, ' + gradient[0] + ', ' + gradient[1] + ')'
    return gradStr
  }

  

  render() {
    return (
      <Button style={Object.assign(this.style,this.props.style)} text={this.props.text} link={this.props.link}/>
    )
  }
}

export default GradientButton