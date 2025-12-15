import React, { useEffect } from "react";
import "./Reserve.css";

function ReservePage() {

  useEffect(() => {
    const items = document.querySelectorAll(".animate-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -80px 0px"
      }
    );

    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.07}s`;
      observer.observe(item);
    });
  }, []);

  return (
    <div className="reserve-page">
      <div className="reserve-header animate-item">
        <h1>Reserve a Table</h1>
        <p>
          Book your dining experience with us effortlessly. Fill in your details below.
        </p>
      </div>

      <form className="reserve-form">
        <div className="reserve-grid">
          <input className="animate-item" type="text" placeholder="Full Name" />
          <input className="animate-item" type="email" placeholder="Email Address" />
          <input className="animate-item" type="tel" placeholder="Phone Number" />
          <input className="animate-item" type="number" placeholder="Number of Guests" />
        </div>

        <div className="reserve-grid">
          <input className="animate-item" type="date" />
          <input className="animate-item" type="time" />
        </div>

        <textarea
          className="animate-item"
          placeholder="Special Requests (optional)"
        ></textarea>

        <button type="submit" className="reserve-btn2 animate-item">
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}

export default ReservePage;
