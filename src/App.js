import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import NavBar from './components/Navbar';
import ProductDetails from './components/ProductDetails';


const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/checkout"><Checkout /></Route>
          <Route path="/details:id"><ProductDetails /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;