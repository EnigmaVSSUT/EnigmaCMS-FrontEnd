import React from 'react';
import "./main.css"
import Carousel from "../Carousel/carousel.jsx"
import Row from "../Project-row/Row.js"

import {Container} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

function MainComponent() {
    return (<>
        <Carousel/>
        <Container fluid className="body_section">
        <Container>

        </Container>
        <Row/>
        </Container>
        </>
    );
}

export default MainComponent;
