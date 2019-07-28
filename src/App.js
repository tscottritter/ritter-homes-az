import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import Header from './components/Header.js';
import Nav from './components/Nav';
import Landing from './components/Landing.js';
import Bio from './components/Bio.js';
import Sales from './components/Sales.js';
import Reviews from './components/Reviews.js';
import Market from './components/Market.js';
import Contact from './components/Contact.js';
import Analysis from './components/Analysis.js';
import Footer from './components/Footer.js';

export default () => (
  <div>
    <Router>
      <div>
        <header>
          <Route path='/' component={Header} />
          <Route path='/' component={Nav} />
        </header>
        <main>
          <Route exact path='/' render={() => <Redirect to="/home" /> } />
          <Route exact path='/home' component={Landing} />
          <Route exact path='/bio' component={Bio} />
          <Route exact path='/sales' component={Sales} />
          <Route exact path='/reviews' component={Reviews} />
          <Route exact path='/market' component={Market} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/analysis' component={Analysis} />
        </main>
        <footer>
          <Route path='/' component={Footer} />
        </footer>
      </div>
    </Router>
  </div>
);
