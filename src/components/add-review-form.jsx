import React from "react";
import "./add-review-form.css";
import axiosFetch from "../hooks/fetch-api";

export default function ReviewForm() {
  const [review, setReview] = React.useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(review);
    await axiosFetch("http://localhost:5000/reviews", "post", {
      comment: review,
      ownerId: localStorage.getItem("userId"),
    });
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
      <div className="submit-btn" onClick={onSubmit}>
        SUBMIT
      </div>
    </div>
  );
}
