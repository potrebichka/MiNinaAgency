import React from 'react'
import backgroundImage from '../assets/images/main-background.jpeg'

const Main = () => {
    const background = {
        background : `url(${backgroundImage}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        height: '100vh',
        overflow: 'hidden'
    }
    return (
        <main style={background}>
            {/* <img src={backgroundImage} alt='background image for main page'/> */}
        </main>
    )
}

export default Main