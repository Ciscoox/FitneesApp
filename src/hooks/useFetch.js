import { useState, useEffect } from 'react'


const useFecth = (url) => {

    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchResource = async () => {
            try {
                let res = await fetch(url)
                let data = await res.json()

                setData(data)
                setLoad(false)

            } catch (error) {

                setLoad(false)
                setError(error)

            }
        }

        fetchResource()
    }, [url])

    return { data, load, error }
}

export default useFecth