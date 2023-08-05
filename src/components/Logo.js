import React from 'react';
import './Component/Component.scss';
import logo from '../misc/BrainFlix-logo.svg';


function Logo() {
  return (
    <div className="App">
      <header className="App-logo">
        <img src={logo}  /> 
      </header>
    </div>
  );
}

export default Logo;