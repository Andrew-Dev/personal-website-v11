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
                        <ProjectCard projectTitle="ActionPad" chips={['iOS','Java']} link="http://actionpad.co"/>
                    </div>
                    <div className="col span_4_of_12">
                        <ProjectCard projectTitle="OdinVR" chips={['iOS','Java']}/>
                    </div>
                    <div className="col span_4_of_12">
                        <ProjectCard projectTitle="GradeGuardian" chips={['iOS']}/>
                    </div>
                </div>
                <div className="section group">
                    <div className="col span_4_of_12">
                        <ProjectCard projectTitle="GiftBucket" chips={['iOS','Java']}/>
                    </div>
                    <div className="col span_4_of_12">
                        <ProjectCard projectTitle="PageStudio" chips={['iOS','Java']}/>
                    </div>
                    <div className="col span_4_of_12">
                        <ProjectCard projectTitle="Summarizer" chips={['iOS']}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects 
