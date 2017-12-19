import React, { Component } from 'react';
import ProjectCard from './ProjectCard'
import './Projects.css'

class Projects extends Component {
    render() {
        return (
            <div id="projects">
                <h1 className="lead projectsLead">Projects</h1>
                <div className="section group">
                    <div className="col span_4_of_12">
                        <ProjectCard projectTitle="ActionPad" chips={['iOS','Java']}/>
                    </div>
                    <div className="col span_4_of_12">
                        <ProjectCard projectTitle="projectTitle" chips={['iOS','Java']}/>
                    </div>
                    <div className="col span_4_of_12">
                        <ProjectCard projectTitle="Page studio" chips={['iOS']}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects 
