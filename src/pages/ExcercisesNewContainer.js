import React from 'react'
import Loading from '../components/loading'
import FatalError from './500'
import ExcercisesNew from './ExcercisesNew'
import url from '../../src/config'
class ExcercisesNewContainer extends React.Component {

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        },
        error: null,
        load: false
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    handleonSubmit = async (e) => {
        e.preventDefault();
        this.setState({
            load: true
        })
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            let res = await fetch(`${url}/exercises`, config)
            let json = await res.json()

            this.setState({
                load: false
            })

            this.props.history.push('/exercise')
        } catch (error) {
            this.setState({
                load: false,
                error
            })
        }

    }
    render() {
        if (this.state.load)
            return <Loading />
        if (this.state.error)
            return <FatalError />

        return <ExcercisesNew
            form={this.state.form}
            onChange={this.handleChange}
            onSubmit={this.handleonSubmit} />


    }
}

export default ExcercisesNewContainer