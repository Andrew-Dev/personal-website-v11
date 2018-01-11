import React, { Component } from 'react'
import Button from './Button'
import GradientButton from './GradientButton'
import './Contact.css'
import './success.css'

class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nameField: '',
      emailField: '',
      messageField: '',
      contactClass: '',
      title: 'Contact'
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
    if(this.state.emailField.trim().length === 0 || this.state.nameField.trim().length === 0 || this.state.messageField.trim().length === 0) {
      return alert('Please fill out all form fields before submitting.')
    }
    console.log("submit",event)
    fetch('https://formspree.io/andrew@andrewarpasi.com', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.nameField,
        email: this.state.emailField,
        message: this.state.messageField,
      })
    })
    this.setState({title: 'Message sent!'})
    const container = document.getElementById('contactArea')
    const fancyCheck = `
    <div class="checkContainer">
            <div class="action">
                <div class="trophy">
                    <svg fill="#8c0093" width="100%" height="100%" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>  
                </svg>
                </div>
                <div class="confetti"></div>
                <div class="confetti two"></div>
                <div class="confetti three"></div>
                <div class="confetti four"></div>
                <div class="confetti--purple"></div>
                <div class="confetti--purple two"></div>
                <div class="confetti--purple three"></div>
                <div class="confetti--purple four"></div>
            </div>
        </div>
    `
    container.innerHTML = fancyCheck
  }

  render() {
    return (
      <div id="contact">
        <br/>
        <h1 className="lead projectsLead">{this.state.title}</h1>
        <div id="contactArea">
          <div id="contactContainer">
            <p className="formLabel">Name</p>
            <input type="text" className="formField" value={this.state.nameField} onChange={this.handleNameChange}></input>
            <p className="formLabel">E-Mail</p>
            <input type="email" className="formField" value={this.state.emailField} onChange={this.handleEmailChange}></input>
            <p className="formLabel">Message</p>
            <textarea className="formField" value={this.state.messageField} onChange={this.handleMessageChange} />
            <div className="centerButtonContainer">
              <GradientButton text="Send" gradient='reef' center={true} clickAction={this.handleSubmit}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
