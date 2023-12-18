import React, { useEffect } from 'react'
import api from '../../services/BaseURL'
import HomeForm from './HomeForm'
function Home() {

    useEffect(() => {
        async function getCategories() {
            try {
                const {data} = await api.get('categories/parents')
                console.log(data);
            } catch (err) {
                console.log(err.message);
            }
        }
        getCategories()
    }, [])

    return (
        <HomeForm />
    )
}

export default Home