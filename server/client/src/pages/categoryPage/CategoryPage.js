import React from 'react'
import CategoryPageForm from './CategoryPageForm'
import useFetch from '../../hooks/useFetch'

function CategoryPage({ category }) {
    const profiles = useFetch(`/freelancers/${category.id}`)
    const subcategories = useFetch(`/category/${category.id}`)
    return (
        <>
            <CategoryPageForm
                categoryName={category.name}
                profiles={profiles}
                subcategories={subcategories}
            />
        </>
    )
}

export default CategoryPage