import React from "react";
import "./add-review-form.css";

export default function ReviewForm() {
  const [review, setReview] = React.useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    //TODO: Handle submit
  };
  return (
    <div className="subscribe">
      <p>Add Review</p>
      <input
        placeholder="Your Review"
        className="subscribe-input"
        name="review"
        type="text"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <br />
      <div className="submit-btn">SUBMIT</div>
    </div>
  );
}
