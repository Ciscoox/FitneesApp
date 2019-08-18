import React from 'react'
import ExcercisesList from '../components/ExcercisesList'
import Welcome from '../components/Welcome'
import Add from '../components/AddItem'


const Exercises = ({ data }) => (
    <React.Fragment>
        <Welcome username="Ciscox" />

        <ExcercisesList execercies={data} />

        <Add />
    </React.Fragment>
)

export default Exercises