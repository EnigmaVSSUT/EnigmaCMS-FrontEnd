import React from 'react';
import Row from "../ProjectRow/ProjectRow";
import Whatwedo from '../Whatwedo/Whatwedo';
import Hero from './sections/Hero';


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
