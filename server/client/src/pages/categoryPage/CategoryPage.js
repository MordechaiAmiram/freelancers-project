import React, { useEffect, useState } from 'react'
import CategoryPageForm from './CategoryPageForm'
import useFetch from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'

function CategoryPage() {
    const location = useLocation()
    let { state } = useLocation(); //category name
    const splitURL = location.pathname.split('/')
    const [subcategories] = useFetch(`categories/children/${splitURL[splitURL.length - 1]}`)
    const [profiles] = useFetch(`/freelancers/${splitURL[splitURL.length - 1]}`)
    const [category, setCategory, error] = useFetch(`/categories/${splitURL[splitURL.length - 1]}`)
    const [categoryName, setCategoryName] = useState(state)

    useEffect(() => {
        if (category) {
            setCategoryName(category.categoryName)
        }
    }, [category])

    return (
        <>
            {category ?
                <CategoryPageForm
                    categoryName={categoryName}
                    category={category}
                    profiles={profiles}
                    subcategories={subcategories}
                />: 
                <h3>{error}</h3>}
        </>
    )
}

export default CategoryPage