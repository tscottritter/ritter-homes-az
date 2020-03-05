import React from 'react';
import './Footer.css'

function Footer() {
  let now = new Date();

  return (
    <div className="Footer">
      <p>
        Austin Fleck Property Management<br></br>
        690 E Warner Rd #153<br></br>
        Gilbert, AZ 85296<br></br>
      </p>
      <img src="/images/fairhousing.png" alt="Realtor MLS Equal Housing Opportunity"/>
      <p>&copy;{ now.getFullYear() } | <a href="https://www.linkedin.com/in/tyler-s-ritter/" target="_blank" rel="noopener noreferrer">TR</a></p>
    </div>
  )
};

export default Footer;