import React from 'react'
import { useState } from 'react';
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
    setLocalStorage(user.userID, user.name, user.email, user.picture.data.url, true)    
  }

  const setLocalStorage = (id, name, email, avatar, login) => {
    localStorage.setItem('userID', id)
    localStorage.setItem('userName', name)
    localStorage.setItem('userEmail', email)
    localStorage.setItem('userAvatar', avatar)
    localStorage.setItem('isLoggedIn', login)
  }

  const clearLocalStorage = () => {
    setLocalStorage('', '', '', '', false)
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
            {isLoggedIn ? <Main isLoggedIn={isLoggedIn}/> : <Redirect to='/fb-auth'/>}            
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/fb-auth'>            
            <Facebook isLoggedIn={isLoggedIn} handleUserInfo={handleUserInfo}/>
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
