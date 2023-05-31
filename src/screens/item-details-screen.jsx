import React from "react";
import { useSearchParams } from "react-router-dom";
import "./item-details-screen.css";

export default function ItemDetailsScreen() {
  const [quantity, setQuantity] = React.useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const onPurchase = (e) => {
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
                src={searchParams.get("photo")}
                alt="product image"
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">{searchParams.get("id")}</div>
              <h1 className="display-5 fw-bolder">
                {searchParams.get("name")}
              </h1>
              <div className="fs-5 mb-5">
                <span>DT{searchParams.get("price")}</span>
              </div>
              <p className="lead">{searchParams.get("description")}</p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  style={{ maxWidth: "3rem" }}
                />
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                  onClick={onPurchase}
                >
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
