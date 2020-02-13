import React from 'react'
import cat1 from './../assets/images/cat1.jpeg'
import cat2 from './../assets/images/cat2.jpeg'
import cat3 from './../assets/images/cat3.jpeg'
import cat4 from './../assets/images/cat4.jpeg'
import cat5 from './../assets/images/cat5.jpeg'
import cat6 from './../assets/images/cat6.jpeg'
import cat7 from './../assets/images/cat7.jpeg'
import cat8 from './../assets/images/cat8.jpeg'
import team from './../assets/images/team.jpeg'

const OurTeam = () => {
    const teamFlex = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        background: `url(${team}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        height: '100vh',
        overflow: 'hidden'
    }

    const teamCard = {
        width: '300px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginRight: '20px;'
    }

    const teamImg = {
        width: '200px'
    }
    return(
        <div style={teamFlex}>
            <div style={teamCard}>
                <img style={teamImg} src={cat1} alt='Chairman' />
                <p>Oliver</p>
                <p>Chairman</p>
            </div>
            <div style={teamCard}>
                <img style={teamImg} src={cat2} alt='CE Accounting' />
                <p>Bella</p>
                <p>CEA</p>
            </div>
            <div style={teamCard}>
                <img style={teamImg} src={cat3} alt='CE Business' />
                <p>Simba</p>
                <p>CEB</p>
            </div>
            <div style={teamCard}>
                <img style={teamImg} src={cat4} alt='CE Corporate Governanve' />
                <p>Chloe</p>
                <p>CEC</p>
            </div>
            <div style={teamCard}>
                <img style={teamImg} src={cat5} alt='CE Economics' />
                <p>Luna</p>
                <p>CEE</p>
            </div>
            <div style={teamCard}>
                <img style={teamImg} src={cat6} alt='CE Finance' />
                <p>Max</p>
                <p>CEF</p>
            </div>
            <div style={teamCard}>
                <img style={teamImg} src={cat7} alt='CE Organization' />
                <p>Lucy</p>
                <p>CEO</p>
            </div>
            <div style={teamCard}>
                <img style={teamImg} src={cat8} alt='CETechnology' />
                <p>Lily</p>
                <p>CET</p>
            </div>
            <style jsx>{`
                p {
                    margin: 0;
                }
            `}</style>
        </div>
    )
}

export default OurTeam