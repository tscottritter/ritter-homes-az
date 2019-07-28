import React from 'react';
import './Contact.css';

export default () => (
  <div className="Contact">
    <div className="flip-card" id="zillowWrapper">
      <div className="flip-card-inner">
        <div className="flip-card-front">
        <img src="/images/Zillow.png" alt="Zillow logo from http://zillow.mediaroom.com/logos" id="zillow" />
        </div>
        <div className="flip-card-back-blue" style={{ margin: 0 }}>
          <a href="https://www.zillow.com/profile/Frederick-S-Ritter/" target="_blank" rel="noopener noreferrer">View my profile</a>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
        <img src="/images/envelope-square-solid.svg" alt="email icon provided by Font Awesome, https://fontawesome.com/license" />
        </div>
        <div className="flip-card-back-green">
          <p>ritterhomesaz@gmail.com</p>
        </div>
      </div>
    </div>
    <br></br>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
        <img src="/images/phone-square-solid.svg" alt="phone icon provided by Font Awesome, https://fontawesome.com/license" />
        </div>
        <div className="flip-card-back-green">
          <p>602.571.0808</p>
        </div>
      </div>
    </div>
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
        <img src="/images/facebook-square-brands.svg" alt="Facebook logo provided by Font Awesome, https://fontawesome.com/license" />
        </div>
        <div className="flip-card-back-blue">
        <a href="https://www.facebook.com/scottritterrealtor/" target="_blank" rel="noopener noreferrer">View my profile</a>
        </div>
      </div>
    </div>
  </div>
);
