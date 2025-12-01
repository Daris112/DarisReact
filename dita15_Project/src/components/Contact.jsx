import React from "react";
import "./Contact.css";

function ContactPage() {
  return (
    <div className="contact-container">
      {/* Header */}
      <div className="contact-top">
        <h1>Get in Touch</h1>
        <p>
          Whether you have questions, want to book an event, or simply want to
          say hello — we’re here for you.
        </p>
      </div>

      {/* Main Content */}
      <div className="contact-wrapper">
        
        {/* Left Side – Info */}
        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="info-block">
            <h3>📍 Address</h3>
            <p>Sunset Avenue 42, New York City</p>
          </div>

          <div className="info-block">
            <h3>📞 Phone</h3>
            <p>+1 (555) 456-7890</p>
          </div>

          <div className="info-block">
            <h3>✉️ Email</h3>
            <p>contact@restaurantlux.com</p>
          </div>

          <div className="info-block">
            <h3>⏰ Working Hours</h3>
            <p>Mon - Sun: 10:00 AM – 11:00 PM</p>
          </div>
        </div>

        {/* Right Side – Form */}
        <form className="contact-form-box">
          <div className="two-inputs">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>

          <input type="tel" placeholder="Phone Number" />

          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
