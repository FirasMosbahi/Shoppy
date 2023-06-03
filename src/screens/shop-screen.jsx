import React from "react";
import Item from "../components/item";
import axiosFetch from "../hooks/fetch-api";
import AppHeader from "../components/app-header";

export default function ShopScreen() {
  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    let response;
    const load = async () => {
      response = await axiosFetch("http://localhost:5000/product", "get");
      setProducts(response.response);
    };
    load();
  }, []);
  return (
    <section className="shop">
      <AppHeader
        title="Shoppy exclusive products"
        content="Dear client please feel free to navigate between our various
              products as you like"
      />
      <section className="card-grid">
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
      </section>
    </section>
  );
}
