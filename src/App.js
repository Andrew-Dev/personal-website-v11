import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IntroArea from './IntroArea'
import Background from './Background'
import ContentArea from './ContentArea'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Background/>
        <div className="content">
            <IntroArea/>
            <ContentArea/>
        </div>
        
      </div>
    );
  }
}

export default App;
