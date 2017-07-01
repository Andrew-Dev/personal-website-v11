import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IntroArea from './IntroArea'
import Background from './Background'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Background/>
        <div className="content">
            <IntroArea/>
        </div>
        
      </div>
    );
  }
}

export default App;
