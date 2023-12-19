import React from 'react'
import './mainCategories.css'
import Category from './Category'
function MainCategories({ categories }) {
    return (
        <>
            <div className='categories'>
                {categories.length > 0 &&
                    categories.map(category => (
                        <Category key={category.id} name={category.name} />
                    ))}
            </div>
        </>
    )
}

export default MainCategories