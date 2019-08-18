import React from 'react'
import ExcerciseForm from '../components/ExcerciseForm'
import Card from '../components/Card'
import '../components/styles/ExerciseNew.css'

const ExcercisesNew = ({ form, onChange, onSubmit }) => (
    <div className="ExerciseNew_Lateral_Spaces row">
        <div className="col-sm ExerciseNew_Card_Space">
            <Card {...form} />
        </div>
        <div className="col-sm ExerciseNew_Form_Space">
            <ExcerciseForm
                onChange={onChange}
                onSubmit={onSubmit}
                form={form} />
        </div>

    </div>

)

export default ExcercisesNew