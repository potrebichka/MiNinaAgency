import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const nav = {
        display: 'flex',
        justifyContent: 'flex-end'
    }

    const spacing = {
        marginRight: '20px'
    }
    return (
        <header>
            <h1>MiNina Agency</h1>
            <nav style={nav}>
                <Link to='/about-us' style={spacing}>About Us</Link>
                <Link to='/our-team' style={spacing}>Our Team</Link>
            </nav>
        </header>
    )
}

export default Header