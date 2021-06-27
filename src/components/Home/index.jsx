import React from 'react';
import Card from '../Card';
import { connect } from "react-redux";
import { setProductList } from "../../actions/index"


const Home = ({ productList }) => {
    return (

        <div style={{ marginTop: "100px", padding: "4%", justifyContent: "center" }
        }>
            <h2 className="clothing-item">Clothing for Men and Women</h2>
            <div style={{ display: "flex", flexWrap: "wrap", padding: "10px 8%" }}>
                {productList.map(product => <Card {...product} key={Math.random()} />)}
            </div>
            <h2>Accessories for Men and Women</h2>

        </div >);
}


const mapStateToProps = (state) => ({
    productList: state.productList,
    cart: state.cart

})

const mapDispatchToProps = (dispatch) => ({
    updateProductList: (productList) => dispatch(setProductList(productList))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

