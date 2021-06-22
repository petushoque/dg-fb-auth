import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import CurrentUserContext from './contexts/CurrentUserContext';
import Facebook from './components/Facebook';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState({
    id: '',
    name: '',
    email: '',
    picture: ''
  })

  const handleUserInfo = (user) => {
    setIsLoggedIn(true)
    setUserInfo({
      id: user.userID,
      name: user.name,
      email: user.email,
      picture: user.picture.data.url
    })
    localStorage.setItem('userID', user.userID)
    localStorage.setItem('userName', user.name)
    localStorage.setItem('userEmail', user.email)
    localStorage.setItem('userAvatar', user.picture.data.url)
  }

  console.log(userInfo)
  console.log(localStorage)

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={userInfo}> 
        <Header />
        <Facebook handleUserInfo={handleUserInfo}/>
        <Footer />
      </CurrentUserContext.Provider> 
    </div>
  );
}

export default App;
