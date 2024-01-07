import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Css/ProductDetails.css";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <div className="outer">
      <div className="left">
        <img className="image" src={data.image} />
      </div>
      <div className="right">
        <h1 className="title">{data.title}</h1>
        <p className="description">{data.description}</p>
        <h4>Price : ${data.price} (10% OFF)</h4>
        <p className="shade">Shade: {data.Shade}</p>

        <p className="rating">
          <StarRatings
            rating={data.Rate}
            starDimension="26px"
            starSpacing="1px"
            starRatedColor="red"
          />{" "}
          (52)
        </p>
        <Link>
          <button className="buy">Checkout →</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
