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
                        <ProjectCard projectTitle="ActionPad" chips={['iOS/Swift','Java','Node','Firebase']} link="http://actionpad.co" buttonText="Website" image="/img/actionpad.png"/>
                    </div>
                    <div className="col span_4_of_12">
                        <ProjectCard projectTitle="OdinVR" chips={['Three.js','Node','Mongo']} link="https://github.com/OdinVR" buttonText="On GitHub" image="/img/odinvr.png"/>
                    </div>
                    <div className="col span_4_of_12">
                        <ProjectCard projectTitle="GradeGuardian" chips={['Node','Mongo','AWS']} link="http://gradeguardian.in" buttonText="Website" image="/img/gradeguardian.png"/>
                    </div>
                </div>
                <div className="section group">
                    <div className="col span_4_of_12">
                        <ProjectCard projectTitle="GiftBucket" chips={['Ruby','Rails','SQL']} link="https://devpost.com/software/giftbucket" buttonText="On DevPost" image="/img/giftbucket.png"/>
                    </div>
                    <div className="col span_4_of_12">
                        <ProjectCard projectTitle="PageStudio" chips={['iOS/Obj-C']} link="http://pagestudio.net" buttonText="Website" image="/img/pagestudio.png"/>
                    </div>
                    <div className="col span_4_of_12">
                        <ProjectCard projectTitle="Summarizer" chips={['Python']} link="http://summarize.andrewarpasi.com" buttonText="Website" image="/img/summlogo.png"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects 
