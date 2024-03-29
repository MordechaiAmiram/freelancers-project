import React from 'react'
import CategoryNavbar from '../../components/navbar/CategoriesNavbar'
import ProfileCard from '../../components/profileCard/ProfileCard'
import Category from '../../components/mainCategories/Category'
import './categoryPage.css'
import InnerRouter from '../../components/innerRouter/InnerRouter'

function CategoryPageFrom({ categoryName, category, profiles, subcategories }) {

    return (
        <>
            <CategoryNavbar />
            <div className='page-background-color min-height-container'>
                <div className='categories-page-main max-width-container'>
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
                                <Category key={category.id} category={category} className={'category-page-link background-color-white'} />
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
                </div>
            </div>
        </>
    )
}

export default CategoryPageFrom