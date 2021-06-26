import React from 'react';
import "./card.css";
import { Link } from 'react-router-dom';

const Card = ({ brand, name, price, preview }) => {
    return (
        <div className="product-card-wrapper">
            <Link className="product-details-link" to="./details.html?id=2">
                <img className="product-preview" src={preview} alt={name} />
                <div className="product-content">
                    <h4 className="product-name">{name}</h4>
                    <h5 className="product-brand">{brand}</h5>
                    <p className="product-price">Rs {price}</p>
                </div>
            </Link>

        </div>
    );
}

export default Card;