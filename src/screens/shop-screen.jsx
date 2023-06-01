import React from "react";
import Item from "../components/item";

export default function ShopScreen() {
  const [products, setProducts] = React.useState(null);
  const fetchProducts = async () => {
    //TODO:handle fetching products
  };
  React.useEffect(() => {});
  return (
    <div className="shop">
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shoppy exclusive products</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              Dear client please feel free to navigate between our various
              products as you like
            </p>
          </div>
        </div>
      </header>
      <section className="py-5 main">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products ? (
              products.map((product) => (
                <Item
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  photo={product.photo}
                  price={product.price}
                />
              ))
            ) : (
              <p className="loading">loading products, please wait ...</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
