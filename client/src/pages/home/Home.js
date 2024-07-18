import React from 'react'
import HomeForm from './HomeForm'
import useFetch from '../../hooks/useFetch'

function Home() {
    const [data] = useFetch('/categories/parents')

    return (
        <div className='min-height-container home-page page-background-color'>
            <div className='max-width-container'>
                <HomeForm categories={data} />
            </div>
        </div>
    )
}

export default Home