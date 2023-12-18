import React from 'react'
import { Button } from '@mui/material'
import InputField from '../../components/form/InputField'
import Navbar from '../../components/navbar/Navbar'
import Categories from '../../components/mainCategories/MainCategories'
import './home.css'
import CategoriesNavbar from '../../components/navbar/CategoriesNavbar'

function HomeForm({categories}) {
    return (
        <>
            <Navbar />
            <CategoriesNavbar />
            <h1>Freeלאנ"ש</h1>
            <Button>חפש</Button>
            <InputField label={'חפש'} sx={{ width: '30%' }} />
            <Categories />
        </>
    )
}

export default HomeForm