import React, { useEffect, useState } from 'react'
import api from '../../services/BaseURL'
import HomeForm from './HomeForm'

function Home() {
    const [categories, setCategories] = useState([])
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
        <HomeForm categories={categories}/>
    )
}

export default Home