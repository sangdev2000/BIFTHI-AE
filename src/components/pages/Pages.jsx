import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Product from "../products/Products";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import ProductDetail from "../products/ProductDetail"; // Import trang chi tiết sản phẩm

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/product' component={Product} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          {/* Route đến trang chi tiết sản phẩm */}
          <Route exact path='/product/:id' component={ProductDetail} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
