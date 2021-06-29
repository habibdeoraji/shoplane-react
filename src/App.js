import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import NavBar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import axios from "axios";
import { productApi } from "./utils/mockApis";
import { connect } from "react-redux";
import { setProductList } from "./actions/index";
import OrderConfirmation from './components/OrderConfirmation';
import Footer from './components/Footer';



const App = (props) => {


  const getProductArray = () => {
    axios.get(productApi).then((response) => {
      props.updateProductList(response.data)
    })
  }

  useEffect(() => {
    getProductArray()
  }, [])

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/checkout"><Checkout /></Route>
          <Route path="/details/:id"><ProductDetails /></Route>
          <Route path="/order-confirmation"><OrderConfirmation /></Route>
          <Route path="*"><h1 style={{ marginTop: "100px" }}>Error Page</h1></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  productList: state.productList

})

const mapDispatchToProps = (dispatch) => ({
  updateProductList: (productList) => dispatch(setProductList(productList))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)