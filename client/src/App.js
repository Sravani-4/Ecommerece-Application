import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Layout/Header";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";
import Footer from "./Layout/Footer";
import Cart from "./Pages/Cart";
import Address from "./Pages/Address";
import Orders from "./Pages/Orders";
import Order_success from "./Pages/Order_success";
import Online_payment from "./Pages/Online_payment";
import Update from "./Pages/Update";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    const isFound = cart.some((element) => {
      if (element._id === item._id) {
        return true;
      }

      return false;
    });

    if (isFound) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    <>
      <Header setShow={setShow} size={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="update/:id" element={<Update />} />
        <Route
          path="Products"
          element={<Product handleClick={handleClick} />}
        />
        <Route
          path="Cart"
          element={
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          }
        />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/address" element={<Address />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order-success" element={<Order_success />} />
        <Route path="/online-payment" element={<Online_payment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
