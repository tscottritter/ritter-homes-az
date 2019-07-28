import React from 'react';
import './Header.css';

export default () => (
  <div className="Header clearfix">
    <img className="headshot" src="/images/headshot.png" alt="Scott Ritter professional headshot" />
    <img className="logo" src="/images/jf_logo.png" alt="J and F Associates logo"/>
    <div className="banner-headlines">
      <h1>Frederick Scott Ritter, Realtor&reg;</h1>
      <h3>Your trusted real estate expert</h3>
    </div>
    <div className="banner-text">
      <h5>
        602.571.0808<br></br>
        ritterhomesaz@gmail.com
      </h5>
    </div>
  </div>
);
