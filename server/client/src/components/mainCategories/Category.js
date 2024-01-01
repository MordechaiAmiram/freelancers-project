import React from 'react'
import { Link } from 'react-router-dom'

function Category({ category, className }) {
    return (
        <Link className={className} to={`/categories/${category.id}`} state={category.name}>{category.name}</Link>
    )
}

export default Category