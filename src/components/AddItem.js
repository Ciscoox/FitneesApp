import React from 'react'
import add from '../images/add.png'
import { Link } from 'react-router-dom'

const Additem = () => (
    <Link to="/exercise/new">
        <img src={add} alt="" className="Fitness-Add"></img>
    </Link>
)

export default Additem