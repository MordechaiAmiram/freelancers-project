import React, { useState } from 'react'
import UploadWidget from '../UploadWidget'
import { Button } from '@mui/material'
import api from '../../services/BaseURL'

function Portfolio({ portfolio }) {
    const [isClicked, setIsClicked] = useState(false)
    const [imageId, setImageId] = useState('')

    const handleClick = () => {
        setIsClicked(prev => !prev)
    }
    const handleImageId = (id) =>{
        setImageId(id)
    }
    const handleSubmit = async () => {
        try {
            const body = {
                portfolioId: portfolio.portfolioId,
                imageCode: imageId
            }
            const {data} = await api.post(`/portfolios/add-image`, body)
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div style={{ width: 200, height: 200, border: 'solid 1px' }}>
            {portfolio.title}
            <div onClick={handleClick}>{!isClicked ? 'הוספת תמונה חדשה' : 'ביטול'}</div>
            {isClicked &&
                <>
                    <UploadWidget handleImageId={handleImageId}/>
                    <Button onClick={handleSubmit}>אישור</Button>
                </>}
        </div>
    )
}

export default Portfolio