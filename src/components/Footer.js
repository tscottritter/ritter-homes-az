import React from 'react';
import './Footer.css'

 function Footer() {
  let now = new Date();

  return (
    <div className="Footer">
      <p>&copy;{ now.getFullYear() } | <a href="https://www.linkedin.com/in/tyler-s-ritter/" target="_blank" noopener="true" noreferrer="true">TR</a>
      </p>
    </div>
  )
 };

export default Footer;