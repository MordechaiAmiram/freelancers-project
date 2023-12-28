import React from 'react'
import { Button } from '@mui/material'
import InputField from '../../components/form/InputField'
import Navbar from '../../components/navbar/Navbar'
import './home.css'
import SearchIcon from '@mui/icons-material/Search';
import MainCategories from '../../components/mainCategories/MainCategories'
import GetImage from '../../components/GetImage'

function HomeForm({ categories }) {
    return (
        <>
            <Navbar />
            <h1>Freeלאנ"ש</h1>
            <Button><SearchIcon /></Button>
            <InputField label={'חפש'} sx={{ width: '30%' }} />
            <MainCategories
                categories={categories}
            />
            <GetImage imageId={'n3sujdkbkz0qfbmlyyvj'}/>
        </>
    )
}

export default HomeForm