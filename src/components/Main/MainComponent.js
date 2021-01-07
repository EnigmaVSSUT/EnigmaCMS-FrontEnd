import React from 'react';
import "./main.css"
import Navbar from "../Navbar/navbar.jsx"
import Preloaders from "../Preloader/preloader.jsx"
import Carousel from "../Carousel/carousel.jsx"

import 'bootstrap/dist/css/bootstrap.min.css';

function MainComponent() {
    return (<>
    
        <Navbar/>
        <Carousel/>
        </>
    );
}

export default MainComponent;
