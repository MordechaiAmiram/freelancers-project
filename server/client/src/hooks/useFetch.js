import { useEffect, useState } from 'react'
import api from '../services/BaseURL';

const useFetch = (url) => {
    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await api.get(url)
                setData(data)
            } catch (err) {
                console.log(err.message);
                setError(err.message)
            }
        }
        fetchData()
    }, [url]);

    return [data, setData, error];
}

export default useFetch