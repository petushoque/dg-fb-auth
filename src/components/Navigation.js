import React from 'react'
import { useContext } from 'react'
import CurrentUserContext from '../contexts/CurrentUserContext';
import './Navigation.css'

export default function Navigation (props) {

    const user = useContext(CurrentUserContext)

    return (
        <nav className='navigation'>
            {props.isLoggedIn && <div>Пункт меню</div>}
            {props.isLoggedIn && <div>Пункт меню</div>}
            {props.isLoggedIn && <div>Пункт меню</div>}
        </nav>
    )
}