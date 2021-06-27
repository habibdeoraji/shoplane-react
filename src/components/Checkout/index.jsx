import React from 'react';
import "./checkout.css";
import { connect } from 'react-redux'


const Checkout = ({ cart }) => {
    const totalAmount = cart.map(prod => prod.quantity * prod.price).reduce((total, value) => total + value)
    return (
        <div className="content-wrapper">
            <div className="left-section">
                <p className="item-count">Total items: <span>{cart.length}</span> </p>
                {cart.map(item =>
                    <div className="checkout-card-wrapper" key={item.id}>
                        <img className="checkout-card-image" src={item.preview} alt={item.name} />
                        <div className="checkout-card-content">
                            <p className="checkout-card-header">{item.name}</p>
                            <p className="checkout-item-count">x{item.quantity}</p>
                            <p className="checkout-item-amount">Amount: Rs {item.quantity * item.price}</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="right-section">
                <div className="place-order-card">
                    <h2>Total amount</h2>
                    <p className="checkout-total-amount">Amount: Rs <span>{totalAmount}</span> </p>
                    <button type="submit" className="place-order-button">Place Order</button>
                </div>
            </div>
        </div >
    );
}



const mapStateToProps = (state) => ({
    cart: state.cart
})


export default connect(mapStateToProps, null)(Checkout)



