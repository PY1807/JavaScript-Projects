import logo from './logo.svg';
import React from 'react';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

const App =()=> {
  return (
    <div className="cont">
     <h1 className='cont1'>RANDOM GIFS</h1>
     <div className="cont2">
      <Random />
      <Tag />
     </div>
  
    </div>
  );
}

export default App;
