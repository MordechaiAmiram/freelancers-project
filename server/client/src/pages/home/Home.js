import React from 'react'
import HomeForm from './HomeForm'
import useFetch from '../../hooks/useFetch'

function Home() {
    const [data] = useFetch('/categories/parents')
    return (
        <div className='home-page max-width-container'>
            <HomeForm categories={data} />
        </div>
    )
}

export default Home