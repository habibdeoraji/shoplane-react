import React from 'react';
import "./checkout.css";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { emptyCart } from "../../actions/index";



const Checkout = ({ cart, clearCart }) => {
    const totalAmount = cart.length > 0 ? cart.map(prod => prod.quantity * prod.price).reduce((total, value) => total + value) : 0;
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
                    {cart.length > 0 ? <Link to="/order-confirmation" className="place-order-button" onClick={() => clearCart()}>Place Order</Link> : <Link to="/checkout" className="place-order-button" onClick={() => alert("Add item to place the order!")}>Place Order</Link>}
                </div>
            </div>
        </div >
    );
}





const mapStateToProps = (state) => ({
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    clearCart: () =>
        dispatch(emptyCart([]))
})


export default connect(mapStateToProps, mapDispatchToProps)(Checkout)



