import React from 'react'
import HomeForm from './HomeForm'
import useFetch from '../../hooks/useFetch'

function Home() {
    const data = useFetch('/categories/parents')
    return (
        <HomeForm categories={data}/>
    )
}

export default Home