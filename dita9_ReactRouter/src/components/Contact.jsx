import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
      <div className="contact-container">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <label htmlFor="name">Full Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Enter your name" 
          required 
        />

        <label htmlFor="email">Email Address</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Enter your email" 
          required 
        />

        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows="5" 
          placeholder="Write your message here..." 
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
    </>
  )
}

export default Contact