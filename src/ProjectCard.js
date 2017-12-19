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
                <div className="imageContainer">
                    <img src={this.props.image} className="projectImage" />
                    <div className="centerButtonContainer">
                        <GradientButton text={this.props.buttonText} gradient='gravity' link={this.props.link} center={true}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectCard
