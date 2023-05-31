import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-5">
        <Link to="/">
          <a className="navbar-brand" href="#!">
            Shoppy
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Link to="/">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </Link>
            <Link to="/shop">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
            </Link>
            <Link to="/cart">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My Cart
                </a>
              </li>
            </Link>
            <Link to="/feedback">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FeedBacks
                </a>
              </li>
            </Link>
            <Link to="/login">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Log in
                </a>
              </li>
            </Link>
            <Link to="/signup">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign up
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
