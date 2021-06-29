import React from 'react';
import "./feature.css"


const Feature = () => {
    return (
        <div className="features">
            <div className="icon-container">
                <div className="img-wrapper pulse-animation-1">
                    <img src="https://shoplane.netlify.app/img/icon1.png" alt="Free Delivery" />
                </div>
                <h4>Free Delivery</h4>
            </div>
            <div className="icon-container">
                <div className="img-wrapper i-2 pulse-animation-2">
                    <img src="https://shoplane.netlify.app/img/icon2.png" alt="Money Back Gurantee" />
                </div>
                <h4>Money Back Gurantee</h4>
            </div>
            <div className="icon-container">
                <div className="img-wrapper pulse-animation-3">
                    <img src="https://shoplane.netlify.app/img/icon3.png" alt="Always Support" />
                </div>
                <h4>Always Support</h4>
            </div>
            <div className="icon-container">
                <div className="img-wrapper pulse-animation-4">
                    <img src="https://shoplane.netlify.app/img/icon4.png" alt="Secure Payment" />
                </div>
                <h4>Secure Payment</h4>
            </div>
        </div>
    );
}

export default Feature;