import React, { Component } from 'react';
import './IntroArea.css'
import GradientButton from './GradientButton'
import Button from './Button'

class IntroArea extends Component {

    render() {
        const buttonStyle = {
            'border-radius':'8px',
            'border-color':'#FFF',
            'color':'#FFF',
            'width':'160px',
            'height':'72px',
            'font-size':'20px',
        }

        return (
            <div id="intro">
                <h1>ANDREW ARPASI</h1>
                <h2><span id="line1">ENTHUSIASTIC DEVELOPER</span> and</h2>
                <h2 id="line2">COMPUTER SCIENCE STUDENT</h2>
                <Button text="RESUME" style={buttonStyle} extraTopSpacing={true}/>
                <Button text="GITHUB" style={buttonStyle} extraTopSpacing={true}/>
            </div>
        )
    }
}

export default IntroArea