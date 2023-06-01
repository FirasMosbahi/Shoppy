import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

export default function Item({ id, name, description, price, photo }) {
  return (
    <div className="col mb-2 item">
      <div className="card h-25">
        <img className="card-img-top" src={photo} alt="product image" />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{name}</h5>
            {price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <Link
            to={`/details?id=${id}&name=${name}&description=${description}&price=${price}&photo=${photo}`}
          >
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#">
                View options
              </a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
