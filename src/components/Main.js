import React from 'react'
import { useContext } from 'react'
import CurrentUserContext from '../contexts/CurrentUserContext';
import './Main.css'

export default function Main (props) {

    const user = useContext(CurrentUserContext)

    return (
        props.isLoggedIn ?
        (<div className='main'>
        {user ? user.name : null}
        <h1>Test</h1>
        </div>) :
        null
        
    )
}