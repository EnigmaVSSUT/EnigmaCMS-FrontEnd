import React, { useEffect } from "react";
import styles from "./Hero.module.css";

import "./particles.css";

import enigmaLogo from "./../../../../assets/logos/enigma-logo-small.png";

function Hero() {
  useEffect(() => {
    if (window.ParticleSlider !== undefined) window.initParticles();
  }, []);
  return (
    <div className={styles.stickyWrap}>
      <div className={styles.homeSectionWrap}>
        <div className={`particle-container ${styles.float}`}>
          <div id="particle-slider">
            <div className="slides">
              <div className="slide" data-src={enigmaLogo}></div>
            </div>
            <canvas className="draw"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
