import React from 'react'
import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import CurrentUserContext from '../contexts/CurrentUserContext';
import './Navigation.css'

export default function Navigation (props) {

    const user = useContext(CurrentUserContext)

    return (
        <nav className='navigation'>
            {props.isLoggedIn && <div>Пункт меню</div>}
            {props.isLoggedIn && <div>Пункт меню</div>}
            {props.isLoggedIn && 
                <div className='navigation__profile'>
                    <h2 className='navigation__name'>{user.name}</h2>
                    <Link to='/profile'>
                        <img className='navigation__picture' src={user.picture} alt={user.name}/>
                    </Link>
                </div>}
        </nav>
    )
}