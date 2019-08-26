import React from 'react';
import './Market.css';

export default () => (
  <div className="Market">
    <img src="/images/July_chart.jpg" alt="the median home price in Mesa, AZ ia up 9.7% year over year"/>
    <embed src="/images/July.pdf" type="application/pdf"></embed>
    <embed src="/images/May.pdf" type="application/pdf"></embed>
    <a href="/images/July.pdf" target="_blank" rel="noopener noreferrer">Click to view detailed July report</a>
    <a href="/images/May.pdf" target="_blank" rel="noopener noreferrer">Click to view detailed May report</a>
  </div>
);
