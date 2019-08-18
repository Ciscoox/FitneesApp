import React from 'react'
import Card from './Card'

const ExcercisesList = ({ execercies }) => (
    <div>
        {
            execercies.map((execercie, i) => {
                return (
                    <Card key={i} {...execercie} />
                )
            })
        }
    </div>
)


export default ExcercisesList