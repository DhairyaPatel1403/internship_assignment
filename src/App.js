import './App.css';
import './style.css';
import React, { useState, useEffect } from 'react';
import img from './graph.png';
import logo from './logo.png';
import { Cards } from './Cards';
import { About } from './About';
import { Footer } from './Footer';


function App() {




  return (
    <>
    <div className="homepage">
      <div className='nav'>
        <div className='logo'><img src={logo}></img>AeraClone</div>

        <div className='item-cont'>
          <a>Product</a>      
          <a>Mission</a>   
          <a>


          <div class="dropdown">
            <button class="dropdown-btn" aria-haspopup="menu">
              <span>Docs</span>
              <span class="arrow"></span>
            </button>
            <ul class="dropdown-content" role="menu">
              <li style={{"--delay": "1;"}}><span>WhitePaper</span></li>
              <li style={{"--delay": "2;"}}><span>Documentation</span></li>
              <li style={{"--delay": "3;"}}><span>Blog</span></li>
            </ul>
          </div>


  

          </a>      
          <a><div className='navbtn'>Launch App</div></a>      
        </div>

      </div>

      <div className='container_home'>
        <div className='text_home'>Hedge Risk to Grow Safely <div className='descr'>Aera is the world's first autonomous, data-driven treasury management protocol.</div><div className='btn'>Learn More</div></div>
        <div className='image_home'><img src={img}></img></div>
      </div>

    </div>

    <Cards/>
    <About/>
    <br></br>

    <Footer/>

    </>
  
  );
}

export default App;
