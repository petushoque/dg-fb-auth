import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import Facebook from './components/Facebook';
import Header from './components/Header';


function App() {

  const [user, setUser] = useState('')

  return (
    <div className='page'>
      <Header />
      <Facebook/>
    </div>
  );
}

export default App;
