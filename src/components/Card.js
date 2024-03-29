import React, { Component } from 'react'
import circlesImg from '../images/circles.png'
import emptyIMG from '../images/empty.png'
import './styles/Card.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Card = ({ title, description, img, leftColor, rightColor }) => (
    <div className="card mx-auto Fitness-Card mt-3"
        style={{
            backgroundImage: `url(${circlesImg}),linear-gradient(to right, ${leftColor || '#56CCF2'
                }, ${rightColor || '#2F80ED'})`
        }}>
        <div className="card-body">
            <div className="row center">
                <div className="col-6">
                    <img src={img || emptyIMG} className="float-right" alt='' />
                </div>
                <div className="col-6 Fitness-Card-Info">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
)


export default Card