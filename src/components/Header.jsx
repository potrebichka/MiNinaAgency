import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const header = {
        marginBottom: '20px',
        padding: '20px;'
    }
    const companyName = {
        fontSize: '35px',
        marginRight: '20px',
        textDecoration: 'none',
        width: '40%',
        margin: '0 auto',
        display: 'block'
    }

    const nav = {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }

    const spacing = {
        fontSize: '20px',
        marginRight: '20px',
        textDecoration: 'none'
    }
    return (
        <header style={header}>
            <nav style={nav}>
                <Link to='/' style={companyName}>MiNina Agency</Link>
                <Link to='/about-us' style={spacing}>About Us</Link>
                <Link to='/our-team' style={spacing}>Meet Our Team</Link>
                <Link to='/portfolio' style={spacing}>Portfolio</Link>
                <Link to='/events' style={spacing}>Events</Link>
            </nav>
        </header>
    )
}

export default Header