import React from 'react'
import useFetch from '../../hooks/useFetch'
import Category from '../mainCategories/Category'

function CategoriesNavbar() {
    const [categories] = useFetch('/categories/parents')
    console.log(categories);
    return (
        <div className='categories-navbar'>
            {categories &&
                categories.map(category => (
                        <Category key={category.id} category={category} className={'category-link-bar'} />
                ))}
        </div>
    )
}

export default CategoriesNavbar