
import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import styled from "styled-components"

import ProductDetail from "../products/ProductDetail";
import Product from "../products/Product"
import Interior from "../pagesProduct/Interior"
import Bathroom from "../pagesProduct/Bathroom"
import Illumination from "../pagesProduct/Illumination"
import InteriorDesign from "../pagesProduct/InteriorDesign"
import RoomKitchen from "../pagesProduct/RoomKitchen"
// import Addtocar from "../home/tocar"

const Pages = () => {
  return (
    <Wpper>
      <Router>
        <Header />
        {/* <Addtocar/> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/product' component={Product} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/interior' component={Interior} />
          <Route exact path='/bathroom' component={Bathroom} />
          <Route exact path='/illumination' component={Illumination} />
          <Route exact path='/interiordesign' component={InteriorDesign} />
          <Route exact path='/roomkitchen' component={RoomKitchen} />
          {/* Route đến trang chi tiết sản phẩm */}
          <Route exact path='/product/:id' component={ProductDetail} />
        </Switch>
        <Footer />
      </Router>
    </Wpper>
  )
}

export default Pages
const Wpper = styled.div`
width: 100%;
max-width: 1440px;
margin: 0px auto;
/* position: relative; */
`;


