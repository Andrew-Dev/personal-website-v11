import React, { Component } from 'react';
import Button from './Button'
import RoundedButton from './RoundedButton'
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
                    <RoundedButton text="Rounded Button"/>
                </div>
            </div>
        )
    }
}

export default ContentArea