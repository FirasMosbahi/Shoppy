import React from "react";
import CartItem from "../components/cart-item";
export default function CartScreen() {
  const [carts, setCarts] = React.useState(null);
  const fetchCarts = async () => {
    //TODO:handle fetching carts
  };
  React.useEffect(() => {});
  return (
    <div>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Your Shoppy Cart</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              Dear client this is your cart while shopping in Shoppy
            </p>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {carts ? (
              carts.map((cart) => (
                <CartItem
                  id={cart.id}
                  name={cart.name}
                  description={cart.description}
                  photo={cart.photo}
                  price={cart.price}
                  quantity={cart.quantity}
                />
              ))
            ) : (
              <p className="loading">loading cart, please wait ...</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
