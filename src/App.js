import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import CurrentUserContext from './contexts/CurrentUserContext';
import Facebook from './components/Facebook';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {

  const handleUserInfo = (user) => {
    console.log(user)
  }

  return (
    <div className='page'>
      <CurrentUserContext.Provider> 
        <Header />
        <Facebook handleUserInfo={handleUserInfo}/>
        <Footer />
      </CurrentUserContext.Provider> 
    </div>
  );
}

export default App;
