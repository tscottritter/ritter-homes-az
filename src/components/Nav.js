import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default () => (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/home">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/bio">Biography</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/sales">Recent Sales</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/reviews">Testimonials</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/market" id="internalMarket">Market Watch</NavLink>
                    <a href="/images/May.pdf" target="_blank"  className="nav-link" id="externalMarket">Market Watch</a>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact Me</NavLink>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <NavLink className="btn btn-success my-2 my-sm-0" to="/analysis">Free Market Analysis</NavLink>
            </form>
        </div>
    </nav>
);
