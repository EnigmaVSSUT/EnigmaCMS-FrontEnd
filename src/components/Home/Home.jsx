import React from 'react';
import Row from "./sections/ProjectRow/ProjectRow";
import Whatwedo from "./sections/Whatwedo/Whatwedo";
import Hero from "./sections/Hero/Hero";


function Home() {
  return (
    <>
      <div className="stickyWrap">
        <Hero />
        <Whatwedo />
        <Row />
      </div>
    </>
  );
}

export default Home
