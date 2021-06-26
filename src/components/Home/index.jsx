import React, { useState, useEffect } from 'react';
import Card from '../Card';
import { productApi } from "../../utils/mockApis";
import axios from "axios";


const Home = () => {

    const [productList, setProductList] = useState([])

    const getProductList = () => {
        axios.get(productApi).then((response) => {
            setProductList(response.data)
            console.log(response.data)
        })
    }

    useEffect(() => {
        getProductList()
    }, [])


    return (
        <div style={{ marginTop: "100px", padding: "4%", justifyContent: "center" }}>
            <h2>Clothing for Men and Women</h2>
            <div style={{ display: "flex", flexWrap: "wrap", padding: "10px 8%" }}>
                {productList.map(product => <Card {...product} key={product.id} />)}
            </div>
            <h2>Accessories for Men and Women</h2>
            <div style={{ display: "flex", flexWrap: "wrap", padding: "10px 8%" }} id="accessories">
                {productList.map(product => <Card {...product} key={product.id} />)}
            </div>
        </div>);
}

export default Home;