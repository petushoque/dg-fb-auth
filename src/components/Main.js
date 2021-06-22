import React from 'react'
import { useContext } from 'react'
import CurrentUserContext from '../contexts/CurrentUserContext';
import './Main.css'

export default function Main () {

    const user = useContext(CurrentUserContext)

    return (
        <div>
        {user ? user.name : null}
        </div>
    )
}