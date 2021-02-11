import React from "react";
import { Carousel } from "react-bootstrap";

import Img1 from "../../assets/images/Carousel/1.jfif";
import Img2 from "../../assets/images/Carousel/1.jfif";
import Img3 from "../../assets/images/Carousel/1.jfif";

import "./carousel_style.css";

function carousel() {
  return (
    <>
      <Carousel className="carousel" controls={false} indicators={false} pause="false">
        <Carousel.Item interval={9600}>
          <img className="d-block w-100 carousel_img" src={Img1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item interval={9600}>
          <img className="d-block w-100 carousel_img" src={Img2} alt="2nd slide" />
        </Carousel.Item>

        <Carousel.Item interval={9600}>
          <img className="d-block w-100 carousel_img" src={Img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      {/*<div className="container intro_txt ">
<h1>Enigma the coding club vssut</h1><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
</div>*/}
    </>
  );
}

export default carousel;
