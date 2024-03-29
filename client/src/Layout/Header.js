import React from "react";
import "../Css/Header.css";
import Logo from "../images/Logo.png";
import { NavLink, Link } from "react-router-dom";
const Header = ({ setShow, size }) => {
  return (
    <div className="head">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              <img className="logo" src={Logo} alt="" />
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link  ">
                  🏡Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/users" className="nav-link ">
                  👤Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Products" className="nav-link ">
                  🛍️Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link ">
                  <div className="cart">
                    <span>🛒cart</span>
                    <span>({size})</span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
