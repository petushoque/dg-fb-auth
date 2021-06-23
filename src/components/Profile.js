import React from 'react'
import { useContext } from 'react'
import CurrentUserContext from '../contexts/CurrentUserContext';
import './Profile.css'

export default function Profile (props) {

    const user = useContext(CurrentUserContext)

    return (
        <div className='profile'>
            <h2>
                {user.name}
            </h2>
            <h2>
                {user.email}
            </h2>
        </div>
    )
}