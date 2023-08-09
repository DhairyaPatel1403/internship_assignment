import React from 'react'
import './style.css';
import auto from './auto.png';

export const Cards = () => {
  return (
    <>


<div className='cards'>
        <div className='card-head'>All-In-One Treasure Strategy</div>
        <div className='card-smallhead'>Designed to work in all market scenarios</div>

        <div className='card-container'>
            <div className='card'>
                <img src={auto}></img>
                <div className='heading'>Automatic.</div>
                <div className='descr'>By rebalancing the portfolio automatically, the treasury may be managed in a timely manner across bear and bull markets.</div>
            </div>
            <div className='card'>
            <img src={auto}></img>
                <div className='heading'>Automatic.</div>
                <div className='descr'>By rebalancing the portfolio automatically, the treasury may be managed in a timely manner across bear and bull markets.</div>
            </div>
        </div>
        <div className='card-container'>
            <div className='card'>
            <img src={auto}></img>
                <div className='heading'>Automatic.</div>
                <div className='descr'>By rebalancing the portfolio automatically, the treasury may be managed in a timely manner across bear and bull markets.</div>
            </div>
            <div className='card'>
            <img src={auto}></img>
                <div className='heading'>Automatic.</div>
                <div className='descr'>By rebalancing the portfolio automatically, the treasury may be managed in a timely manner across bear and bull markets.</div>
            </div>
        </div>
    </div>
    
    
        
        <br></br>
        <br></br>
        <br></br>
    </>

  )
}
