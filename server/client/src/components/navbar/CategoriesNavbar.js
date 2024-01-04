import React, { useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import Category from '../mainCategories/Category'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

function CategoriesNavbar() {
    const [categories] = useFetch('/categories/parents')
    const navRef = useRef()

    const rightClick = () => {
        navRef.current.scrollLeft += 100;
    }

    const leftClick = () => {
        navRef.current.scrollLeft -= 100;
    }

    return (
        <div className='categories-flex-container'>
            <button className='slide-btns' id="slideRight"
                onClick={rightClick}
                >
                <KeyboardDoubleArrowRightIcon onClick={rightClick} />
            </button>
            <div className='categories-navbar' ref={navRef}>
                {categories &&
                    categories.map(category => (
                        <>
                            <Category key={category.id} category={category} className={'category-link-bar'} />
                        </>
                    ))}
            </div>
            <button className='slide-btns' id="slideLeft"
                onClick={leftClick}>
                <KeyboardDoubleArrowLeftIcon onClick={leftClick} />
            </button>
        </div>

    )
}

export default CategoriesNavbar