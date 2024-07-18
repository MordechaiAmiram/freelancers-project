import React, { useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import Category from '../mainCategories/Category'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Divider } from '@mui/material';

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
        <div className='nav-bar-wrapper'>
            <div className='categories-flex-container max-width-container'>
                <button className='slide-btns' id="slide-right"
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
                <button className='slide-btns' id="slide-left"
                    onClick={leftClick}>
                    <KeyboardDoubleArrowLeftIcon onClick={leftClick} />
                </button>
            </div>
            <Divider />
        </div>
    )
}

export default CategoriesNavbar