import React from "react";
import "./review.css";

export default function Review({ user, date, comment }) {
  return (
    <div className="card">
      <p className="card__content">{comment}</p>
      <div className="card__date">
        {date} , {user}
      </div>
    </div>
  );
}
