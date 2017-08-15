import React, { Component } from 'react';
import Button from './Button'
import GradientButton from './GradientButton'
import './ContentArea.css'

class ContentArea extends Component {
    render() {
        return (
            <div id="contentArea">
                <div id="divider"/>
                <div id="introduction">
                    <h1 id="introLead">intro text</h1>
                    <Button text="Press me"/>
                    <Button text="And me"/>
                    <GradientButton text="gradient" gradient='sunset'/>
                    <GradientButton text="gradient" gradient='mtnDew'/>
                    <GradientButton text="gradient" gradient='gravity'/>
                </div>
            </div>
        )
    }
}

export default ContentArea