import React from 'react';
import Row from "../ProjectRow/ProjectRow";
import Hero from './sections/Hero';


function Home() {
  return (
    <>
      <div className="stickyWrap">
        <Hero />
        <Row />
      </div>
    </>
  );
}

export default Home
