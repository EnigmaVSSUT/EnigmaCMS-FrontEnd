import React from 'react';
import {Lines} from 'react-preloaders';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <React.Fragment>
      <MainComponent />
      <Lines background={'black'} color={'green'} time={2000}/>
    </React.Fragment>
  );
}

export default App;
