import React from 'react'
import PropTypes from 'prop-types'

const Content = (props) => {
    return (
        <div className='content'>
            <style jsx>{`
                .content {
                    display: flex;
                    margin: 30px;
                    padding-bottom: 20px;
                    border-bottom: 1px solid lightgray;
                }
                .content img {
                    height: 330px;
                    border-radius: 10px;
                }
                .text {
                    padding: 0px 30px;
                }
                .text h2 {
                    text-align: center;
                }
                .text p {
                    text-align: justify;
                }

            `}</style>
            <img src={props.img} />
            <div className="text">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

Content.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Content