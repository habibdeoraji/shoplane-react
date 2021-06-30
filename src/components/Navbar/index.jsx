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
import { Link as ScrollLink } from "react-scroll";

const NavBar = ({ cart }) => {
  return (
    <nav className="top_bar">
      <div className="logo">
        <Link to="/" className="logo-brand" onClick={() => window.scrollTo({
          top: 0,
          behavior: "smooth"
        })}>
          <h4>
            <span>SHOP</span>LANE
          </h4>
        </Link>
      </div>
      <div className="nav-link-wrapper">
        <Link to="/" className="nav-link" onClick={() => window.scrollTo({
          top: 0,
          behavior: "smooth"
        })}>
          HOME
        </Link>
        <ScrollLink
          to="clothing-section"
          spy={true}
          smooth={true}
          duration={500}
          className='nav-link clothings'
        >
          CLOTHINGS
        </ScrollLink>
        <ScrollLink
          to={"accessories-section"}
          spy={true}
          smooth={true}
          duration={500}
          className="nav-link accessories"
        >
          ACCESSORIES
        </ScrollLink>
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
    </nav >
  );
};


const mapStateToProps = (state) => ({
  cart: state.cart
});



export default connect(mapStateToProps, null)(NavBar);
