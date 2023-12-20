import React from 'react'
import CategoryPageForm from './CategoryPageForm'
import useFetch from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'

function CategoryPage() {
    const location = useLocation()
    let { state } = useLocation();
    const subcategories = useFetch(location.pathname)
    const splitURL = location.pathname.split('/')
    const profiles = useFetch(`/freelancers/${splitURL[splitURL.length - 1]}`)
    return (
        <>
            <CategoryPageForm
                categoryName={state}
                profiles={profiles}
                subcategories={subcategories}
            />
        </>
    )
}

export default CategoryPage