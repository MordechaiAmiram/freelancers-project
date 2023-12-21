import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import CategoryNavbar from '../../components/navbar/CategoriesNavbar'
import ProfileCard from '../../components/profileCard/ProfileCard'
import Category from '../../components/mainCategories/Category'

function CategoryPageFrom({ categoryName, profiles, subcategories }) {
    return (
        <>
            <Navbar />
            <CategoryNavbar />
            <h1>{categoryName}</h1>
            {subcategories && subcategories.map(category => (
                <Category key={category.id} category={category} />
            ))}
            {profiles && profiles.map(profile => (
                <ProfileCard
                    profile={profile}
                    key={profile.freelanceId}
                />
            ))}

        </>
    )
}

export default CategoryPageFrom