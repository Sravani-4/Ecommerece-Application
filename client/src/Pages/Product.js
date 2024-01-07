import React, { useState, useEffect } from "react";
import axios from "axios";
import StarRatings from "react-star-ratings";
import "../Css/Product.css";
// import image1 from "../Products/Product1.webp";
// import image2 from "../Products/Product2.jpg";
// import image3 from "../Products/Product3.jpg";
// import image4 from "../Products/Product4.webp";
// import image5 from "../Products/Product5.webp";
// import image6 from "../Products/Product6.jpg";
// import image7 from "../Products/Product7.webp";
// import image8 from "../Products/Product8.webp";
// import image9 from "../Products/Product9.jpg";
// import image10 from "../Products/Product10.jpg";
// import image11 from "../Products/Product11.webp";
// import image12 from "../Products/Product12.jpg";
import { Link } from "react-router-dom";

const Product = ({ handleClick }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/products")
      .then((res) => setProducts(res.data));

    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  const Truncate = (string, number) => {
    if (!string) {
      return null;
    }
    if (string.length <= number) {
      return string;
    }
    return string.slice(0, number) + "...";
  };
  return (
    <div className="main0">
      <label>Search Here : </label>{" "}
      <input
        type="text"
        className="card-input"
        placeholder="Search Products"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredProducts?.length ? (
        <div className="main">
          {filteredProducts.map((e) => {
            return (
              <div className="Product-card" key={e._id}>
                <img src={e.image} className="Product-image" alt="..." />
                <div className="Product-body">
                  <h5 className="Product-title">{Truncate(e.title, 20)}</h5>
                  <p className="Product-text  ">
                    {Truncate(e.description, 55)}
                  </p>

                  <h5 className="Product-text  ">
                    Price:{e.price}Rs/-
                    {/* <del>{e.price1}</del> */}
                  </h5>
                  <p className="Product-text  " style={{ maxWidth: 250 }}>
                    <StarRatings
                      rating={e.Rate}
                      starDimension="16px"
                      starSpacing="1px"
                      starRatedColor="black"
                    />
                  </p>
                  <Link>
                    <button
                      onClick={() => handleClick(e)}
                      className="product-button1"
                    >
                      Add To Cart
                    </button>
                  </Link>
                  <Link to={`/products/${e.id}`} state={e}>
                    <button className="product-button2">More Info</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="no-products">
          <h1 className="no-products1">Sorry ☹️!!!</h1>
          <h1 className="no-products2">No Result!!!</h1>
        </div>
      )}
    </div>
  );
};

export default Product;
