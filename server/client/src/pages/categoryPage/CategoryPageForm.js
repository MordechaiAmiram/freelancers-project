import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import CategoryNavbar from '../../components/navbar/CategoriesNavbar'
import ProfileCard from '../../components/profileCard/ProfileCard'
import Category from '../../components/mainCategories/Category'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Link as RouterLInk } from 'react-router-dom'
import './categoryPage.css'

function CategoryPageFrom({ categoryName, category, profiles, subcategories }) {

    return (
        <>
            <Navbar />
            <CategoryNavbar />
            <h1>{categoryName}</h1>
            <div className='inner-router'>
                <RouterLInk to={'/'}>
                    <HomeRoundedIcon /> /
                </RouterLInk>

                {category.parentName && <RouterLInk to={`/categories/${category.parentId}`}>
                    {` ${category.parentName} /`}
                </RouterLInk>
                }
                {` ${categoryName}`}
            </div>

            {subcategories &&
                <div className='categories-container'>
                    {subcategories.map(category => (
                        <Category key={category.id} category={category} className={'category-page-link'} />
                    ))}
                </div>
            }
            {profiles &&
                <div className='profiles-flex'>
                    {profiles.map(profile => (
                        <ProfileCard
                            profile={profile}
                            key={profile.freelanceId}
                        />
                    ))}
                </div>}
        </>
    )
}

export default CategoryPageFrom