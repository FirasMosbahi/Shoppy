import React from "react";
import "../screens/item-details-screen.css";

export default function CartItem({
  id,
  name,
  description,
  price,
  quantity,
  photo,
}) {
  const onRemove = (e) => {
    e.preventDefault();
    //TODO : handle add to cart
  };
  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={photo}
                alt="product image"
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">{id}</div>
              <h1 className="display-5 fw-bolder">{name}</h1>
            </div>
            <p className="lead">{quantity}</p>
            <div className="d-flex">
              <div className="fs-5 mb-5">
                <span>Total price : DT{price * quantity}</span>
              </div>
              <p className="lead">{description}</p>
              <div className="d-flex">
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                  onClick={onRemove}
                >
                  <i className="bi-cart-fill me-1"></i>
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
