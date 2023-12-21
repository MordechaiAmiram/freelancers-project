import React, { useEffect, useState } from 'react'
import CategoryPageForm from './CategoryPageForm'
import useFetch from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'

function CategoryPage() {
    const location = useLocation()
    let { state } = useLocation();
    const splitURL = location.pathname.split('/')
    const subcategories = useFetch(location.pathname)
    const profiles = useFetch(`/freelancers/${splitURL[splitURL.length - 1]}`)
    const category = useFetch(`/categories/${splitURL[splitURL.length - 1]}`)
    const [categoryName, setCategoryName] = useState(state)

    useEffect(() => {
        if (category) {
            setCategoryName(category.name)
        }
    }, [category])

    return (
        <>
            <CategoryPageForm
                categoryName={categoryName}
                profiles={profiles}
                subcategories={subcategories}
            />
        </>
    )
}

export default CategoryPage