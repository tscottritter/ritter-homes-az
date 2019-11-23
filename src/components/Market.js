import React from 'react';
import './Market.css';

export default () => (
  <div className="Market row">
    <div className="offset-lg-2 col-lg-8">
      <img src="/images/Nov_chart.jpg" alt="Asking Prices up 9% Over Last Year, but are Buyers Paying It? These Homes Have Appreciated the Most since 2000"/>
      <p>
        <b>Contracts In Escrow Up 19% Over Last Year Despite Rising Prices, Affordability is Good</b>
        <br></br><br></br>
        <b>For Buyers:</b> Buyers waiting for prices to come down have been sorely disappointed so far in 2019.  The average sale price per square foot is up 6.7% since last November and the median sales price is now $283,000, up $21,000 from last November’s measure of $262,000.
        <br></br><br></br>
        Despite rising prices, affordability has remained normal throughout the year.  One relevant factor is Private Sector Earnings in Greater Phoenix has risen 4.5% annually as interest rates have continually declined.  The median family income was measured at $72,900 last quarter and families making that income could afford 68% of what sold last quarter (according to the HOI index published by the National Association of Home Builders and Wells Fargo).  The historical norm for our market is 60-75%.
        <br></br><br></br>
        Clearly not all buyers have parked on the fence, demand has been hovering 6-7% above normal for our area for about 4 months while supply is 44% below normal.  The only measurable relief for buyers is last month’s supply level was 47% below normal, so it’s 3% less hard to find something suitable.
        <br></br><br></br>
        <b>For Sellers:</b> The number of listings under contract may have declined 26% from its May seasonal peak, but it’s nearly 19% higher than it was this time last year.  This, combined with monthly sales up nearly 15% over last year, is a solid indicator that year-end closings will outperform last year despite a shaky start.
        <br></br><br></br>
        Single Family permits (future supply) are up 4.6% year-to-date and multi-family permits are up 6.4%, reaching a level not seen since 2007. Single family home sales are up 5.7%, but new townhome and condo sales are down a whopping 30%, which is surprising.  Resale condos and townhomes have increased in sales volume this year, so the drop in sales for new construction despite an increase in permits indicates that much of the multi-family units constructed are not for individual sale but are for rent.
        <br></br><br></br>
        This is good news if you’re planning to sell your condo because the majority of developments are not competing for buyers.  This is not good news if you’re renting your condo nearby because that’s an increase in competing units for renters.  “Apartment style” private condo rental rates per square foot have grown less than 1% over the course of 3.5 years according to the Arizona Regional MLS records.
        <br></br><br></br>
        Commentary written by Tina Tamboer, Senior Housing Analyst with The Cromford Report ©2019 Cromford Associates LLC and Tamboer Consulting LLC
      </p>
      <embed src="/images/Oct.pdf" type="application/pdf"></embed>
      <a href="/images/Oct.pdf" target="_blank" rel="noopener noreferrer">Click here to see this month's detailed report</a><br></br>
    </div>
    <div className="col-lg-2">
      <h5>Past Reports</h5>
      <a href="/images/Sep.pdf" target="_blank" rel="noopener noreferrer">September 2019</a><br></br>
      <a href="/images/Aug.pdf" target="_blank" rel="noopener noreferrer">August 2019</a><br></br>
      <a href="/images/July.pdf" target="_blank" rel="noopener noreferrer">July 2019</a><br></br>
      <a href="/images/May.pdf" target="_blank" rel="noopener noreferrer">May 2019</a><br></br>
    </div>
  </div>
);
