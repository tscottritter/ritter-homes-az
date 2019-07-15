import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';

import Header from './components/Header.js';
import Landing from './components/Landing.js';
import Footer from './components/Footer.js';

export default () => (
  <div>
    <Router>
      <div>
        <header>
          <Route path='/' component={Header} />
        </header>
        <main>
          <Route exact path='/' component={Landing} />
        </main>
        <footer>
          <Route path='/' component={Footer} />
        </footer>
      </div>
    </Router>
  </div>
);
