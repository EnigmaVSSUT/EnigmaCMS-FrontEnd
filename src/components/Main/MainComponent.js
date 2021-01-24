import React from 'react';
import "./main.css"
import Carousel from "../Carousel/carousel.jsx"
import Row from "../Project-row/Row.js"
import Preloaders from "../Preloader/preloader.jsx"
import Navbar from "../Navbar/navbar.jsx"
import Footer from "../Footer/Footer.js"
import Contact from "../Contact/Contact.js"
import Auth from "../Auth/Auth.jsx"

import {Container} from "react-bootstrap";

import {Switch,Route,}from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

function MainComponent() {
    return (
        <React.Fragment>
        {/*<Preloaders/>*/}
        <Navbar/>
        <Switch>
              <Route path="/" exact>
                <Carousel/>
                <Row/>
              </Route>
              <Route path="/contact">
                 <Contact/>
              </Route>
              <Route path="/auth">
                 <Auth/>
              </Route>
              <Route>
              <Carousel/>
              <Row/>
              </Route>
            </Switch>
            <Footer/>

        </React.Fragment>
    );
}

export default MainComponent;
