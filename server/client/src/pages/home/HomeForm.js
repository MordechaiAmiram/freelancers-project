import React from 'react'
import { Button } from '@mui/material'
import InputField from '../../components/form/InputField'
import Navbar from '../../components/navbar/Navbar'
import './home.css'
import CategoriesNavbar from '../../components/navbar/CategoriesNavbar'
import SearchIcon from '@mui/icons-material/Search';
import MainCategories from '../../components/mainCategories/MainCategories'


function HomeForm({ categories }) {
    return (
        <>
            <Navbar />
            <CategoriesNavbar />
            <h1>Freeלאנ"ש</h1>
            <Button><SearchIcon /></Button>
            <InputField label={'חפש'} sx={{ width: '30%' }} />
            <MainCategories 
            categories={categories}/>
        </>
    )
}

export default HomeForm