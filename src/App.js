import React from 'react'
import { useState, useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import CurrentUserContext from './contexts/CurrentUserContext';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Facebook from './components/Facebook'
import Profile from './components/Profile';
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
    localStorage.setItem('isLoggedIn', true)
  }

  console.log(userInfo)
  console.log(localStorage)

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={userInfo}> 
        <Header />
        <Navigation isLoggedIn={isLoggedIn}/>
        <Switch>
          <Route exact path='/'>
            <Main isLoggedIn={isLoggedIn}/>
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/fb-auth'>            
            <Facebook handleUserInfo={handleUserInfo}/>
          </Route>
          <Route>
            {isLoggedIn ? <Redirect to='/'/> : <Redirect to='/fb-auth'/>}
          </Route>
        </Switch>
        <Footer />
      </CurrentUserContext.Provider> 
    </div>
  );
}

export default App;
