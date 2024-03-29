import React from 'react'
import './home.css'
import MainCategories from '../../components/mainCategories/MainCategories'
import SearchField from '../../components/searchField/SearchField'

function HomeForm({ categories }) {
    return (
        <>
            <div className='search-home'>
                <SearchField />
            </div>
            <MainCategories
                categories={categories}
            />
        </>
    )
}

export default HomeForm