import React, { Component } from 'react';
import './ContentArea.css'
import Introduction from './Introduction'

class ContentArea extends Component {
    render() {
        return (
            <div id="contentArea">
                <div id="divider"/>
                <Introduction/>
            </div>
        )
    }
}

export default ContentArea