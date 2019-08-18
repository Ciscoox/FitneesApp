import React from 'react'
import Exercises from './Exercises'
import Loading from '../components/loading'
import FatalError from './500'
import useFetch from '../hooks/useFetch'
import url from '../../src/config'
const ExcercisesContainer = () => {

    const { data, load, error } = useFetch(`${url}/exercises`)

    if (load)
        return <Loading />

    if (error)
        return <FatalError />

    return (
        <Exercises data={data} />
    )
}

/*
class ExcercisesContainer extends Component {

    state = {
        data: [],
        load: true,
        error: null
    }


    async componentDidMount() {
        await this.fetchExercises();
    }

    fetchExercises = async () => {
        try {
            let res = await fetch('http://localhost:8000/api/exercises')
            let data = await res.json()
            this.setState({
                data,
                load: false
            })
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

        return (
            <Exercises data={this.state.data} />
        )
    }
}
*/
export default ExcercisesContainer