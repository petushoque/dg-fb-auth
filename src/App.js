import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import CurrentUserContext from './contexts/CurrentUserContext';
import Facebook from './components/Facebook';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {

  return (
    <div className='page'>
      <Header />
      <Facebook />
      <Footer />
    </div>
  );
}

export default App;
