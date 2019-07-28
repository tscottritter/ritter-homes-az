import React from 'react';
import './Footer.css'

 function Footer() {
  let now = new Date();

  return (
    <div className="Footer">
      <p>
        J&F Associates<br></br>
        6197 S Rural Rd<br></br>
        Tempe, AZ 85283<br></br>
      </p>
      <img src="/images/fairhousing.png" alt="Realtor MLS Equal Housing Opportunity"/>
      <p>&copy;{ now.getFullYear() } | <a href="https://www.linkedin.com/in/tyler-s-ritter/" target="_blank" rel="noopener noreferrer">TR</a></p>
    </div>
  )
 };

export default Footer;