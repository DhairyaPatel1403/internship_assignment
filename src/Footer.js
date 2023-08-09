import React from 'react'
import './style.css'
import logo from './logo.png';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='left'><div className='head'>Get Started</div><div className='descr'>Managing assets to hedge risk will allow your protocol to provide better experience for your users and give you a competitive edge in the market.</div><div className='btn'>Contact Us</div><div className='btnghst'>Launch App</div></div>
            
            <div className='right'>
                <div className='list'>
                    <span>Docs</span>
                    <span>Whitepaper</span>
                    <span>Developer Docs</span>
                    <span>Blog</span>
                </div>
                <div className='list'>
                    <span>Mission</span>
                </div>
                <div className='list'>
                    <span>Stay Updated</span>
                </div>
            </div>
        </div>
        <div className='headl'><img src={logo}></img>AeraClone</div>
    </div>
  )
}
