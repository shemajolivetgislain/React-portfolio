import Header from "./containers/header";
import ProductListing from "./containers/productListing";
import ProductDetails from "./containers/productDetails";
import React from "react";
import { BrowserRouter as Switch, Router } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Router path="/" exact component={ProductListing} />
          <Router path="/product/:productId" exact component={ProductDetails} />
          <Router>404 Not Found!</Router>
        </Switch>
      </Router>
    </div>
  );
}
