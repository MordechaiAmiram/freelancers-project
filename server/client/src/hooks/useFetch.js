import { useEffect, useState } from 'react'
import api from '../services/BaseURL';

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await api.get(url)
                setData(data)
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData()
    }, [url]);

    return data;
}

export default useFetch