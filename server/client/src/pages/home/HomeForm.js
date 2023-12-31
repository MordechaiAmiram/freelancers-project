import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './home.css'
import MainCategories from '../../components/mainCategories/MainCategories'
import SearchField from '../../components/searchField/SearchField'

function HomeForm({ categories }) {
    return (
        <>
            <Navbar />
            <h1>Freeלאנ"ש</h1>
            <SearchField />
            <MainCategories
                categories={categories}
            />
        </>
    )
}

export default HomeForm