import React from 'react';
import Card from '../Card';
import HomeCarousel from "../Carousel/index";
import Feature from "../Feature"
import { connect } from "react-redux";
import { setProductList } from "../../actions/index";


const Home = ({ productList }) => {
    return (
        <React.Fragment>
            <HomeCarousel />
            <Feature />
            <div style={{ padding: "0px 4%", justifyContent: "center" }
            }>
                <h2 style={{ paddingTop: "80px", marginTop: "0px" }} id='clothing-section'>Clothing for Men and Women</h2>
                <div style={{ display: "flex", flexWrap: "wrap", padding: "10px 8%" }}>
                    {productList.map(product => (product.isAccessory) || <Card {...product} key={Math.random()} />)}
                </div>

                <h2 style={{ paddingTop: "80px" }} id="accessories-section">Accessories for Men and Women</h2>

                <div style={{ display: "flex", flexWrap: "wrap", padding: "10px 8%" }}>
                    {productList.map(product => !(product.isAccessory) || <Card {...product} key={Math.random()} />)}
                </div>
            </div ></React.Fragment>
    );
}


const mapStateToProps = (state) => ({
    productList: state.productList,
    cart: state.cart

})

const mapDispatchToProps = (dispatch) => ({
    updateProductList: (productList) => dispatch(setProductList(productList))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

