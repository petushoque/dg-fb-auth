import React from 'react'
import { useContext } from 'react'
import CurrentUserContext from '../contexts/CurrentUserContext';
import Facebook from './Facebook';
import './Navigation.css'

export default function Navigation (props) {

    const user = useContext(CurrentUserContext)

    return (
        <nav className='navigation'>
            {props.isLoggedIn && <div>Пункт меню</div>}
            <Facebook handleUserInfo={props.handleUserInfo}/>
        </nav>
    )
}