import React, { Component } from 'react';
import Button from './Button'
import GradientButton from './GradientButton'
import Chip from './Chip'
import './ProjectCard.css'

class ProjectCard extends Component {

    componentWillMount() {
        this.chips = this.props.chips || []
    }

    render() {
        return (
            <div className="projectCard">
                <h2 className="projectTitle">{this.props.projectTitle}</h2>
                <div className="chips">
                    {this.chips.map((str) => {
                        return <Chip text={str} />
                    })}
                </div>
                <GradientButton text="gradient" gradient='gravity'/>
            </div>
        )
    }
}

export default ProjectCard
