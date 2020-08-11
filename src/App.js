import React from 'react';
import imageInSrc from './imageInSrc.jpg';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
       <div style = {{border:'solid 1px black',maxWidth:'100vw'}}/>  
       <h1 className= "titlered">Your name here  </h1> 
       <img src='./imageInPublic.jpg'/>
       
    </div>
  );
}

export default App;
