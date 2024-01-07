import React, { useEffect } from "react";
import success from "../images/success.gif";
import "../Css/Order_success.css";
import { Link, useNavigate } from "react-router-dom";
const Order_success = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
    window.location.reload();
  }

  return (
    <div className="order_success">
      <img src={success} alt="" />
      <h3>Order Placed Successfully</h3>

      <button className="back_home" onClick={handleClick}>
        Back To Home
      </button>
    </div>
  );
};

export default Order_success;
