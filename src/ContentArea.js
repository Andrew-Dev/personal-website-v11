import React, { Component } from 'react';
import './ContentArea.css'
import Introduction from './Introduction'
import Projects from './Projects'
import Contact from './Contact'
import './grid.css'

class ContentArea extends Component {
    render() {
        return (
            <div id="contentArea">
                <div id="divider"/>
                <Introduction/>
                <Projects/>
                <Contact/>
            </div>
        )
    }
}

export default ContentArea