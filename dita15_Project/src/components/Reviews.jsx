import React, { useState } from "react";
import "./Review.css";

function ReviewForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setName("");
    setRating(0);
    setMessage("");
  };

  return (
    <div className="review-form-section">
      <h1 className="form-title">Leave a Review</h1>
      <p className="form-subtitle">We appreciate your feedback!</p>

      <form className="review-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label>Your Rating</label>
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= rating ? "star active" : "star"}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Your Review</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your review here..."
            required
          ></textarea>
        </div>

        <button className="submit-btn" type="submit">
          Submit Review
        </button>

        {submitted && <p className="success-msg">Thank you for your review! ✔</p>}
      </form>
    </div>
  );
}

export default ReviewForm;
