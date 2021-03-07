import React from "react";
import Row from "./sections/ProjectRow/ProjectRow";
import Whatwedo from "./sections/Whatwedo/Whatwedo";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";

function Home() {
  return (
    <>
      <div className="stickyWrap">
        <Hero />
        <About />
        <Whatwedo />
        <Row />
      </div>
    </>
  );
}

export default Home;
