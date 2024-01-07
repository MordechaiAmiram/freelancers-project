import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import './innerRouter.css'

function InnerRouter({ parentName, parentId, categoryName }) {

    return (
        <>
            <div className='inner-router'>
                <RouterLink to={'/'}>
                    <HomeRoundedIcon />
                </RouterLink> /
                {parentName &&
                    <>
                        <RouterLink to={`/categories/${parentId}`}>
                            {` ${parentName}`}
                        </RouterLink> /
                    </>
                }
                {` ${categoryName}`}
            </div>
        </>
    )
}

export default InnerRouter