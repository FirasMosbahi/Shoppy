import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

export default function Item({ id, name, description, price, photo }) {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(data:image/png;base64,${photo})` }}
      ></div>
      <h3 className="card-title">{name}</h3>
      <p className="card-price">${price}</p>
      <Link
        to={`/details?id=${id}&name=${name}&description=${description}&price=${price}&photo=data:image/png;base64,${photo}`}
      >
        <button className="card-button">View Details</button>{" "}
      </Link>
    </div>
  );
}
