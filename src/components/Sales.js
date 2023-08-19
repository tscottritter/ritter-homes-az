import React, { Component } from 'react';
import SalesList from './Sales.json';
import './Sales.css';

export default class Sales extends Component {
  render() {
    const sales = SalesList.sales.map((item, i) => (
      <tr key={i}>
        <td>
          <a href={item.url} target="_blank" rel="noopener noreferrer">{item.address1}
          <br></br>
          {item.address2}</a>
        </td>
        <td>{item.represented}</td>
        <td>{item.dateSold}</td>
        <td>{item.price}</td>
      </tr>
    ))

    return (
      <div className="Sales">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Property Address</th>
              <th scope="col">Represented</th>
              <th scope="col">Date Sold</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            { sales }
          </tbody>
        </table>
        <a className="btn btn-primary" href="https://www.zillow.com/profile/Frederick-S-Ritter/#pastSales" target="_blank" rel="noopener noreferrer">More on Zillow</a><br></br><br></br>
        <a className="btn btn-success" href="https://www.zillow.com/profile/Frederick-S-Ritter/#forSaleListings" target="_blank" rel="noopener noreferrer">See My Active Listings</a>
        <br></br><br></br><img width="118px;" src="https://www.zillow.com/widgets/GetVersionedResource.htm?path=/static/logos/Zillowlogo_150x40.gif" alt="powered by Zillow" />
      </div>
    )
  }
}