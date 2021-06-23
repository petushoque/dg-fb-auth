import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header className='header'>
            <Link to='/'>
                <h1 className='header__title'>Deutsche Grammatik</h1>
            </Link>
        </header>
    )
}