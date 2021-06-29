import React, { useEffect, useState } from "react";
import "./productdetails.css";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../actions/index";
import Spinner from "react-bootstrap/Spinner";

const ProductDetails = (props) => {
    const [productDetails, setProductDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const { id } = useParams() || window.location.pathname.slice(9);

    async function getProductById() {
        const productDetailsById = props.productList.filter(
            (product) => product.id === id
        )[0];
        productDetailsById && setLoading(false);
        setProductDetails(productDetailsById);
    }

    useEffect(() => {
        getProductById();
    });

    return (
        <>

            {loading ? (
                <div
                    style={{
                        margin: "45vh auto",
                        width: "100px",
                    }}
                >
                    <Spinner animation="border" variant="primary" size="l" />
                </div>
            ) : (
                    <div
                        style={{
                            marginTop: "100px",
                        }}
                        className="details_content"
                    >
                        <div className="preview_card">
                            <img
                                className="preview_image"
                                src={productDetails.photos[activeIndex]}
                                alt="prv"
                            />
                        </div>
                        <div className="content_card">
                            <div className="product_description">
                                <h1 className="product-name"> {productDetails.name} </h1>
                                <h4 className="product_brand"> {productDetails.brand} </h4>
                                <h3 className="price_prefix">
                                    Price: Rs <span> {productDetails.price} </span>
                                </h3>
                                <div className="description">
                                    <h3> Description</h3>
                                    <p className="description_text">

                                        {productDetails.description}
                                    </p>
                                </div>
                                <h3 className="product_preview"> Product Preview </h3>
                                <div>

                                    {productDetails.photos.map((photo, index) => (
                                        <img
                                            className={
                                                activeIndex === index
                                                    ? "preview_photo active-preview"
                                                    : "preview_photo"
                                            }
                                            src={photo}
                                            alt="prv"
                                            key={index}
                                            onClick={() => setActiveIndex(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <button
                                className="add_button"
                                onClick={() => {
                                    const cartItem = props.cart;
                                    let indexOfNewProduct = cartItem.findIndex(
                                        (item) => item.id === productDetails.id
                                    );
                                    if (indexOfNewProduct === -1) {
                                        cartItem.push(productDetails);
                                        productDetails.quantity = 1;
                                        props.addProductToCart(cartItem);
                                    } else {
                                        cartItem[indexOfNewProduct].quantity += 1;
                                        props.addProductToCart(cartItem);
                                    }
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                )}
        </>
    );
};

const mapStateToProps = (state) => ({
    productList: state.productList,
    productById: state.productById,
    cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
    addProductToCart: (product) => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
