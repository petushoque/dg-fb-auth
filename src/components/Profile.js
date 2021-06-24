import React from 'react'
import { useContext } from 'react'
import CurrentUserContext from '../contexts/CurrentUserContext';
import './Profile.css'

export default function Profile (props) {

    const user = useContext(CurrentUserContext)

    return (
        <div className='profile'>
            <div className='profile__card'>
                <h2>
                    ID: {user.id}
                </h2>
                <h2>
                    Name: {user.name}
                </h2>
                <h2>
                    E-mail: {user.email}
                </h2>
            </div>
        </div>
    )
}