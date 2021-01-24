
import React from 'react';
import Preloaders from "./components/Preloader/preloader.jsx"
import Navbar from "./components/Navbar/navbar.jsx"
import Footer from "./components/Footer/Footer.js"
import MainComponent from './components/Main/MainComponent';
import Contact from "./components/Contact/Contact.js"
import Auth from "./components/Auth/Auth.jsx"
import {Switch,Route,}from "react-router-dom";

function App() {
  return (
    <React.Fragment>
    <Navbar/>
    <Switch>
          <Route path="/" exact>
          <MainComponent />
          </Route>
          <Route path="/contact">
             <Contact/>
          </Route>
          <Route path="/auth">
             <Auth/>
          </Route>
          <Route>
          <MainComponent />
          </Route>
        </Switch>
        <Footer/>

    </React.Fragment>

  );
}

export default App;
