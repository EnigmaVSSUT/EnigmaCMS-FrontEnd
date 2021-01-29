import React from 'react'
import {Sugar} from 'react-preloaders';

function Preloader() {
  return (
    <React.Fragment>
      <Sugar color={'#35FF1F'} background="#100E17" time={3000} />
    </React.Fragment>
  );
}

export default Preloader;
