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
                        <ProjectCard projectTitle="Vyden" chips={['A-Frame','JS','Firebase']} link="https://github.com/Vyden" buttonText="On GitHub" image="/img/vyden.png"/>
                    </div>
                    <div className="col span_4_of_12">
                        <ProjectCard projectTitle="Omnisone" chips={['Node','Ethereum','Postgres']} link="https://devpost.com/software/omnisone" buttonText="On Devpost" image="/img/omnisone.png"/>
                    </div>
                    
                </div>
                <div className="section group">
                    <div className="col span_4_of_12">
                        <ProjectCard projectTitle="GradeGuardian" chips={['Node','Mongo','AWS']} link="http://gradeguardian.in" buttonText="Website" image="/img/gradeguardian.png"/>
                    </div>
                    <div className="col span_4_of_12">
                        <ProjectCard projectTitle="GiftBucket" chips={['Ruby','Rails','SQL']} link="https://devpost.com/software/giftbucket" buttonText="On DevPost" image="/img/giftbucket.png"/>
                    </div>
                    <div className="col span_4_of_12">
                        <ProjectCard projectTitle="PageStudio" chips={['iOS/Obj-C']} link="http://pagestudio.net" buttonText="Website" image="/img/pagestudio.png"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects 
