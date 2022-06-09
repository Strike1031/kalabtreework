import logo from './logo.svg';
import './App.css';
//
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

//Import pages
import LandingPage from '../src/pages/LandingPage'
import MyNavbar from './layouts/MyNavbar'

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <LandingPage/>
    </div>
  );
}

export default App;
