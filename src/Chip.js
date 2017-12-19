import React, { Component } from 'react';
import './Chip.css'

class Chip extends Component {
    render() {
        return (
            <div className="chip">
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Chip 
