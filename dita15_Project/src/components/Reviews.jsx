import React, { useState } from "react";
import "./Reviews.css";

function ReviewsPage() {
  const [reviews, setReviews] = useState([
    {
      name: "John Doe",
      rating: 5,
      message: "Amazing food, great service! Highly recommended.",
    },
    {
      name: "Emily Carter",
      rating: 4,
      message: "Beautiful place and delicious dishes!",
    },
    {
      name: "Michael Smith",
      rating: 5,
      message: "Best dining experience I've had in a long time.",
    },
  ]);

  const [formName, setFormName] = useState("");
  const [formRating, setFormRating] = useState(0);
  const [formMessage, setFormMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name: formName,
      rating: formRating,
      message: formMessage,
    };

    setReviews([newReview, ...reviews]);
    setSubmitted(true);

    setFormName("");
    setFormRating(0);
    setFormMessage("");

    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <div className="reviews-page">
      {/* HEADER */}
      <div className="reviews-header">
        <h1>Customer Reviews</h1>
        <p>See what our guests are saying about their dining experience.</p>
      </div>

      {/* REVIEWS GRID */}
      <div className="reviews-grid">
        {reviews.map((rev, i) => (
          <div className="review-card" key={i}>
            <div className="review-avatar">{rev.name.charAt(0)}</div>

            <h3 className="review-name">{rev.name}</h3>

            <p className="review-text">{rev.message}</p>

            <span className="stars">{"★".repeat(rev.rating)}</span>
          </div>
        ))}
      </div>

      {/* REVIEW FORM */}
      <div className="review-form-section">
        <h2 className="form-title">Leave a Review</h2>
        <p className="form-subtitle">We appreciate your feedback!</p>

        <form className="review-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
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
                  className={star <= formRating ? "star active" : "star"}
                  onClick={() => setFormRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Your Review</label>
            <textarea
              value={formMessage}
              onChange={(e) => setFormMessage(e.target.value)}
              placeholder="Share your experience..."
              required
            />
          </div>

          <button className="submit-btn" type="submit">
            Submit Review
          </button>

          {submitted && (
            <p className="success-msg">Your review was submitted ✓</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ReviewsPage;
