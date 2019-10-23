import React, { Component } from 'react';

class Introduction extends Component {
  render() {
    return (
      <div id="introduction">
        <h1 className="lead introLead">About</h1>
        <img src="/img/me.png"/>
        <p id="introBody">I am a senior at Purdue University studying Computer Science. I am always striving to learn new technologies, and I aspire to use my knowledge in a way that is beneficial to others. I have worked on many different projects, including full stack web applications and mobile applications. I am also currently a software developer for the Purdue Cognition and Learning Lab.</p>
      </div>
    )
  }
}

export default Introduction
