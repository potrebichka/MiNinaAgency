import React from 'react'
import backgroundImage from '../assets/images/main-background.jpeg'

const Main = () => {
    const mainStyling = {
        background : `url(${backgroundImage}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        height: '100vh',
        overflow: 'hidden'
    }
    const mainText = {
        fontSize: '25px',
        width: '70vw',
        margin: '15vh',
        textAlign: 'center'
    }
    return (
        <main style={mainStyling}>
            <p style={mainText}>Mauris elementum lacus eu rutrum laoreet. Integer eleifend, tortor id efficitur porttitor, lectus est fringilla orci, id tempus ante massa et nisi.</p>
        </main>
    )
}

export default Main