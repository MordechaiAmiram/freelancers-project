import React from 'react'
import './mainCategories.css'
import Category from './Category'
function MainCategories({ categories }) {
    return (
        <>
            <div className='categories'>
                {categories &&
                    categories.map(category => (
                        <Category key={category.id} category={category} />
                    ))}
            </div>
        </>
    )
}

export default MainCategories