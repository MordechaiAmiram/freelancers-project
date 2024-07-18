import React from 'react'
import './mainCategories.css'
import Category from './Category'
// import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined'; //ציור ואיור
// import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined'; //צילום
// import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'; //וידאו
// import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';//אדריכלות ועיצוב פנים
// import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';//מוזיקה

function MainCategories({ categories }) {
    return (
        <>
            <div className='categories'>
                {categories &&
                    categories.map(category => (
                        <div key={category.id} className='category-link-wrapper'>
                            {/* {category.name === 'ציור ואיור' &&
                                <ColorLensOutlinedIcon />
                            }
                            {category.name === 'צילום' &&
                                <PhotoCameraOutlinedIcon />
                            }
                            {category.name === 'וידאו' &&
                                <VideocamOutlinedIcon />
                            }
                            {category.name === 'אדריכלות ועיצוב פנים' &&
                                <DesignServicesOutlinedIcon />
                            }
                            {category.name === 'מוזיקה' &&
                                <MusicNoteOutlinedIcon />
                            } */}
                            <Category category={category} className={'main-categories-link background-color-white'} />
                        </div>
                    ))}
            </div>
        </>
    )
}

export default MainCategories