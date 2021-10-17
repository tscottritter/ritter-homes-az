import React from 'react';
import './Footer.css'

function Footer() {
  let now = new Date();

  return (
    <div className="Footer">
      <p>
        JPAR Vantage<br></br>
        2168 E Williams Field Rd, Suite 210<br></br>
        Gilbert, AZ 85295<br></br>
      </p>
      <img src="/images/fairhousing.png" alt="Realtor MLS Equal Housing Opportunity"/>
      <p>&copy;{ now.getFullYear() } | <a href="https://www.linkedin.com/in/tyler-s-ritter/" target="_blank" rel="noopener noreferrer">TR</a></p>
    </div>
  )
};

export default Footer;