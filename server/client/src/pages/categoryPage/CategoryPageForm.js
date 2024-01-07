import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import CategoryNavbar from '../../components/navbar/CategoriesNavbar'
import ProfileCard from '../../components/profileCard/ProfileCard'
import Category from '../../components/mainCategories/Category'
import './categoryPage.css'
import InnerRouter from '../../components/innerRouter/InnerRouter'

function CategoryPageFrom({ categoryName, category, profiles, subcategories }) {

    return (
        <>
            <Navbar />
            <CategoryNavbar />
            <div className='category-page-router'>
                <InnerRouter
                    parentId={category.parentId}
                    parentName={category.parentName}
                    categoryName={categoryName}
                />
            </div>
            <h1>{categoryName}</h1>
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