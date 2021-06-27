import React from 'react';
import "./orderConfirmation.css";
import { connect } from 'react-redux';

const OrderConfirmation = ({ cart }) => {
    return (<div className="order-confirm">
        <img src="https://shoplane.netlify.app/img/img_confirm.png" alt=".order-confirmation" />
        <h3>Order Placed Successfully!!</h3>
        <p>We have sent you an email with the order details</p>
    </div>);
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps, null)(OrderConfirmation);