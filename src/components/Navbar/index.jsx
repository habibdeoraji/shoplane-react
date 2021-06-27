import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import { connect } from "react-redux";


const NavBar = ({ cart }) => {

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
        <p className="nav-link clothings" onClick={(e) => { console.log(e.target) }}>
          CLOTHINGS
        </p>
        <p className="nav-link accessories">
          ACCESSORIES
        </p>
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faSearch} className="icon-item" />
        <Link to="/checkout" className="cart-wrapper">
          <span className="cart-count">{cart.length}</span>
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


const mapStateToProps = (state) => ({
  cart: state.cart
});



export default connect(mapStateToProps, null)(NavBar);
