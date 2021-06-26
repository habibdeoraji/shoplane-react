import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="top_bar">
      <div className="logo">
        <Link to="/" className="logo-brand">
          <h4>
            <span>SHOP</span>LANE
          </h4>
        </Link>
      </div>
      <div className="nav-link-wrapper">
        <Link to="/" className="nav-link">
          HOME
        </Link>
        <Link to="/home#clothing" className="nav-link">
          CLOTHINGS
        </Link>
        <Link to="/home#assessories" className="nav-link">
          ACCESSORIES
        </Link>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faSearch} className="icon-item" />
        <Link to="/checkout" className="cart-wrapper">
          <span className="cart-count">{0}</span>
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="icon-item cart"
          ></FontAwesomeIcon>
        </Link>
        <FontAwesomeIcon icon={faUserCircle} className="icon-item" />
      </div>
    </div>
  );
};

export default NavBar;
