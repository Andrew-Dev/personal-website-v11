import React, { Component } from 'react';
import Button from './Button'
import GradientButton from './GradientButton'

class Introduction extends Component {
  render() {
    return (
      <div id="introduction">
          <h1 id="introLead">intro text</h1>
          <Button text="Press me"/>
          <Button text="And me"/>
          <GradientButton text="gradient" gradient='sunset'/>
          <GradientButton text="gradient" gradient='mtnDew'/>
          <GradientButton text="gradient" gradient='gravity'/>
      </div>
    )
  }
}

export default Introduction