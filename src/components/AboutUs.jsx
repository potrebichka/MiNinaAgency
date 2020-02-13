import React from "react";
import AboutUsImg from "../assets/images/about-us.jpeg"

const AboutUs = () => {
    const AboutStyling = {
        background: `url(${AboutUsImg}) no-repeat center center fixed`,
        height: "100vh",
        overflow: "hidden",
        backgroundSize: "cover"
    }
    const AboutUsText = {
        fontSize: "25px",
        width: "70vw",
        margin: "15vh",
        textAlign: "center"
    }
    return (
        <div style={AboutStyling}>
            <p style={AboutUsText}>The velocity of business is increasing. Change is the only constant. The rewards – and the risks – have never been higher. To succeed in this new world, businesses must take a new approach to managing the relationships that drive commerce. Contracts are the foundation of those relationships.</p>
            <p style={AboutUsText}>The Icertis Contract Management (ICM) platform transforms contracts into strategic business assets, giving global enterprises powerful new capabilities to maximize revenue, control costs, and manage risk.</p>
        </div>
    )
}

export default AboutUs