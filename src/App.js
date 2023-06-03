import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomeScreen from "./screens/home-screen";
//import "./App.css";
import LoginScreen from "./screens/login-screen";
import RegisterScreen from "./screens/register-screen";
import ItemDetailsScreen from "./screens/item-details-screen";
import ShopScreen from "./screens/shop-screen";
import ReviewsScreen from "./screens/reviews-screen";
import AddProductScreen from "./screens/add-product-screen";
import CartScreen from "./screens/cart-screen";

function App() {
  return (
    <div className="App">
      <div className="screen-body">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" element={<HomeScreen />}></Route>
            <Route path="/login" element={<LoginScreen />}></Route>
            <Route path="/signup" element={<RegisterScreen />}></Route>
            <Route path="/details" element={<ItemDetailsScreen />}></Route>
            <Route path="/shop" element={<ShopScreen />}></Route>
            <Route path="/feedback" element={<ReviewsScreen />}></Route>
            <Route path="/admin" element={<AddProductScreen />}></Route>
            <Route path="/cart" element={<CartScreen />}></Route>
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
