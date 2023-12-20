import React from 'react'
import { Link } from 'react-router-dom'

function Category({ category }) {
    return (
        <div><Link to={`/categories/children/${category.id}`} state={category.name}>{category.name}</Link></div>
    )
}

export default Category