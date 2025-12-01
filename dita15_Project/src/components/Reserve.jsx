import React from "react";
import "./Reserve.css";

function ReservePage() {
  return (
    <div className="reserve-page">
      <div className="reserve-header">
        <h1>Reserve a Table</h1>
        <p>Book your dining experience with us effortlessly. Fill in your details below.</p>
      </div>

      <form className="reserve-form">
        <div className="reserve-grid">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="tel" placeholder="Phone Number" />
          <input type="number" placeholder="Number of Guests" />
        </div>

        <div className="reserve-grid">
          <input type="date" />
          <input type="time" />
        </div>

        <textarea placeholder="Special Requests (optional)"></textarea>

        <button type="submit" className="reserve-btn2">
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}

export default ReservePage;
