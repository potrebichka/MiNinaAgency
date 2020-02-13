import React from 'react'
import PropTypes from 'prop-types'

const EventCard = props => {
    return (
        <div className="event-card">
            <h3>{props.title}</h3>
            <p>{props.date}</p>
            <p className='location'>{props.location}</p>
            <p>{props.description}</p>
            <style jsx>{`
                .event-card {
                    width: 300px;
                    border: 1px solid lightgray;
                    border-radius: 4px;
                    padding: 30px;
                    margin-bottom: 20px;
                    margin-right: 20px;
                    background-color: rgba(255, 255, 255, 0.8);
                }
                .event-card h3 {
                    font-size: 30px
                }

                .event-card .location {
                    border-bottom: 1px solid lightgray;
                    padding-bottom: 10px;
                }
            `}</style>
        </div>
    )
}

EventCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default EventCard