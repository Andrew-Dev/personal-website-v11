import React, { Component } from 'react'
import Button from './Button'
import GradientButton from './GradientButton'
import './Contact.css'

class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nameField: '',
      emailField: '',
      messageField: '',
      contactClass: ''
    }
  }

  handleNameChange = (event) => {
    this.setState({nameField: event.target.value})
  }

  handleEmailChange = (event) => {
    this.setState({emailField: event.target.value})
  }

  handleMessageChange = (event) => {
    this.setState({messageField: event.target.value})
  }

  handleSubmit = (event) => {
    console.log("submit",event)
  }

  render() {
    return (
      <div id="contact">
        <br/>
        <h1 className="lead projectsLead">Contact</h1>
        <div id="contactContainer">
          <p className="formLabel">Name</p>
          <input type="text" className="formField" value={this.state.nameField} onChange={this.handleNameChange}></input>
          <p className="formLabel">E-Mail</p>
          <input type="email" className="formField" value={this.state.emailField} onChange={this.handleEmailChange}></input>
          <p className="formLabel">Message</p>
          <textarea className="formField" value={this.state.messageField} onChange={this.handleChange} />
          <div className="centerButtonContainer">
            <GradientButton text="Send" gradient='reef' center={true} clickAction={this.handleSubmit}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
