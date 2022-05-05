import React from 'react';
import './Landing.css';

export default () => (
  <div className="Landing">
    <div className='row'>
      <div className='col-md-4'>
        <img src="/images/open-house.jpeg" alt="open house sign" />
        <h3>
          <a href='https://www.zillow.com/homedetails/1523-N-Balboa-Mesa-AZ-85205/157726118_zpid/' target="_blank" rel="noopener noreferrer">
            1523 N Balboa</a> in Mesa!
        </h3>
        <ul>
          <li>Friday, May 6th from 3-6 PM</li>
          <li>Saturday, May 7th from 10 AM-3 PM</li>
          <li>Sunday, May 8th from 9 AM-noon</li>
        </ul>
      </div>
      <div className='col-md-8 open-house'>
        <h1>$490,000</h1>
        <img src="/images/balboa.webp" alt="front of house for sale" />
      </div>
    </div>
    <h1>Results that move you!</h1>
    <img src='/images/landing.jpg' alt="asphalt road leading to mountains, by Ganapathy Kumar from Unsplash" />
    <div className="row">
      <div className="col-md-6 landing-text">
        <h5>Scott's advice to sellers:</h5>
        <hr></hr>
        <p>Choose a trusted advisor who will be with you each step of the way, giving you the confidence you have maximized
          your investment by selling your home at the best price with the least amount of stress.</p>
      </div>
      <div className="col-md-3">
        <img src="/images/for_sale.jpg" alt="for sale sign" />
      </div>
      <div className="col-md-3">
        <img src="/images/headshot_small.jpg" alt="Scott Ritter smiling headshot" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <img src='/images/moving.jpg' alt='moving van' />
      </div>
      <div className="col-md-6 landing-text">
        <h5>Scott's thoughts about buyers:</h5>
        <hr></hr>
        <p>I love to be a part of the lives of my clients, by their side as they choose the home where they will live,
          laugh, and love.</p>
      </div>
    </div>
  </div>
);
