import React from "react";
import { Link } from "react-router-dom";
import "./home-screen.css";

export default function HomeScreen() {
  return (
    <div>
      <header className="bg-dark py-5">
        <div className="container px-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6">
              <div className="text-center my-5">
                <h1 className="display-5 fw-bolder text-white mb-2">
                  Welcome to Shoppy - Your Ultimate Online Shopping Destination!
                </h1>
                <p className="lead text-white-50 mb-4">
                  At Shoppy, we believe shopping should be effortless and
                  enjoyable. With our wide range of products and user-friendly
                  platform, we provide a seamless online shopping journey. Find
                  trendy fashion, cutting-edge electronics, stylish home decor,
                  and everyday essentials, all from the comfort of your home.
                  Enjoy convenience, reliability, and tailored shopping
                  experiences. Join us and unlock limitless possibilities at
                  Shoppy.
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                  <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#">
                    Get Started
                  </a>
                  <a className="btn btn-outline-light btn-lg px-4" href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="py-5 border-bottom" id="features">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-collection"></i>
              </div>
              <h2 className="h4 fw-bolder">Browse Inventory</h2>
              <p>
                "Explore available products and view their details in our
                comprehensive inventory.
              </p>
              <Link to="/shop">
                <a className="text-decoration-none" href="#!">
                  Call to action
                  <i className="bi bi-arrow-right"></i>
                </a>
              </Link>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-building"></i>
              </div>
              <h2 className="h4 fw-bolder">Your Shopping Cart</h2>
              <p>
                Keep track of your selected items and manage your purchases
                easily in your cart.
              </p>
              <Link to="/cart">
                <a className="text-decoration-none" href="#!">
                  Call to action
                  <i className="bi bi-arrow-right"></i>
                </a>
              </Link>
            </div>
            <div className="col-lg-4">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-toggles2"></i>
              </div>
              <h2 className="h4 fw-bolder">Share Your Experience</h2>
              <p>
                Provide valuable feedback or add your thoughts to help us
                improve our products and services.
              </p>
              <Link to="/feedback">
                <a className="text-decoration-none" href="#!">
                  Call to action
                  <i className="bi bi-arrow-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-5 bg-dark">
        <div className="container px-5">
          <p className="m-0 text-center text-white">
            Copyright &copy; Shoppy :Firas Mosbahi, Ahmed Aziz Bousaid , Amine
            Chaabini
          </p>
        </div>
      </footer>
    </div>
  );
}
