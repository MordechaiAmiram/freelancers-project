import React from 'react'
import CategoryPageForm from './CategoryPageForm'
import useFetch from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'

function CategoryPage({ category }) {
    const location = useLocation()
    let { state } = useLocation();
    const subcategories = useFetch(location.pathname)
    // const profiles = useFetch(`/freelancers/${category.id}`)
    console.log(subcategories);
    return (
        <>
            <CategoryPageForm
            categoryName={state}
            // profiles={profiles}
            subcategories={subcategories}
            />
        </>
    )
}

export default CategoryPage