import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const companyName = {
        fontSize: '35px',
        marginRight: '20px',
        textDecoration: 'none',
        width: '20%',
        margin: '0 auto',
        display: 'block'
    }

    const nav = {
        display: 'flex',
        justifyContent: 'flex-end'
    }

    const spacing = {
        fontSize: '20px',
        marginRight: '20px',
        textDecoration: 'none'
    }
    return (
        <header>
            <Link to='/' style={companyName}>MiNina Agency</Link>
            <nav style={nav}>
                <Link to='/about-us' style={spacing}>About Us</Link>
                <Link to='/our-team' style={spacing}>Meet Our Team</Link>
            </nav>
        </header>
    )
}

export default Header