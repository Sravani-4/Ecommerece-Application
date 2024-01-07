import React from "react";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import Logo1 from "../images/Logo1.jpg";
import Logo2 from "../images/Logo2.jpg";
import Logo3 from "../images/Logo3.jpg";
import "../Css/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" alt="..." />
            <div className="Caption carousel-caption d-none d-md-block">
              <h5></h5>
              <p className="name">COMPACT</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="..." />
            <div className="Caption carousel-caption d-none d-md-block">
              <h5></h5>
              <p>BRUSHES</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100" alt="..." />
            <div className="Caption carousel-caption d-none d-md-block">
              <h5></h5>
              <p>FOUNDATION</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="box1">
        <h1>CATEGORIES!!!</h1>
        <div className="box">
          <div className="card5">
            <div className="lines1" />
            <div className="imgBx1">
              <img className="img4" src={slide1} alt="person-image" />
            </div>
            <div className="content1">
              <div className="details">
                <div className="data">
                  <img className="logo1" src={Logo1} alt="person-image" />
                  <h2>
                    MARS
                    <br />
                    <span>COMPACT POWDER</span>
                  </h2>
                </div>
                <div className="actionBtn">
                  <button>FREE SHIPPING ON ORDERS ABOVE 750</button>
                  <Link to="/products">
                    <button>GO TO PRODUCT</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card5">
            <div className="lines1" />
            <div className="imgBx1">
              <img className="img4" src={slide2} alt="person-image" />
            </div>
            <div className="content1">
              <div className="details">
                <div className="data">
                  <img className="logo2" src={Logo2} alt="person-image" />
                  <h2>
                    SWISS BEAUTY
                    <br />
                    <span>MAKEUP BRUSHES</span>
                  </h2>
                </div>
                <div className="actionBtn">
                  <button>500 OFF ON FIRST ORDER ABOVE 1499</button>
                  <Link to="/products">
                    <button>GO TO PRODUCT</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card5">
            <div className="lines1" />
            <div className="imgBx1">
              <img className="img4" src={slide3} alt="person-image" />
            </div>
            <div className="content1">
              <div className="details">
                <div className="data">
                  <img className="logo3" src={Logo3} alt="person-image" />
                  <h2>
                    LAKEMÉ
                    <br />
                    <span>FOUNDATION</span>
                  </h2>
                </div>
                <div className="actionBtn">
                  <button>GET 20% OFF ON FIRST ORDER</button>
                  <Link to="/products">
                    <button>GO TO PRODUCT</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
