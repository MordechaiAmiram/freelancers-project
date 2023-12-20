import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import CategoryNavbar from '../../components/navbar/CategoriesNavbar'
import ProfileCard from '../../components/profileCard/ProfileCard'

function CategoryPageFrom({ categoryName, profiles, subcategories }) {
    return (
        <>
            <Navbar />
            <CategoryNavbar />
            <h1>{categoryName}</h1>
            {subcategories && subcategories.map(category => (
                <div key={category.id}>{category.name}</div>
            ))}
            {profiles && profiles.map(profile => (
                <ProfileCard  
                key={profile.id}
                name={profile.name}
                rating={profile.rating}
                text={profile.title}    
                />
            ))}

        </>
    )
}

export default CategoryPageFrom