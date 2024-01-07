import axios from "axios";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Css/Orders.css";
const Orders = (props) => {
  const location = useLocation();
  const data = location.state?.cart;
  const price = location.state?.price;
  const name = location.state?.name;
  const email = location.state?.email;
  const address = location.state?.address;

  console.log(price);
  useEffect(() => {
    axios
      .post("http://localhost:8081/order", {
        data,
        price,
        name,
        email,
        address,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <div className="details">
        <h1>Order Details</h1>
      </div>
      <h4>
        Customer Name&nbsp;&nbsp;: &nbsp; <span>{name}</span>
      </h4>
      <h4>
        Delivery Address&nbsp;: &nbsp; <span>{address}</span>
      </h4>{" "}
      <table className="table">
        <thead>
          <tr className="tr1">
            <th> Product_Name</th>
            <th> Qty</th>
            <th> Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr className="tr1">
                <td>{item.title}</td>
                <td>{item.amount}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
          <th>Total&nbsp; :&nbsp; {price} $</th>
        </tbody>
      </table>
      <div className="delivery">
        <h3>Choose Payment Mode:</h3>
        <Link to="/order-success" refresh="true">
          <button className="cash_payment">Cash On Delivery</button>
        </Link>
        <Link to="/online-payment" refresh="true">
          <button className="online_payment">Cash On Delivery</button>
        </Link>
      </div>
    </div>
  );
};

export default Orders;
