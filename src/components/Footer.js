import React from 'react';
import './Footer.css'

function Footer() {
  let now = new Date();

  return (
    <div className="Footer">
      <p>
        Keller Williams Integrity First<br></br>
        830 S Higley Rd<br></br>
        Gilbert, AZ 85296<br></br>
      </p>
      <img src="/images/fairhousing.png" alt="Realtor MLS Equal Housing Opportunity"/>
      <p>&copy;{ now.getFullYear() } | <a href="https://www.linkedin.com/in/tyler-s-ritter/" target="_blank" rel="noopener noreferrer">TR</a></p>
    </div>
  )
};

export default Footer;