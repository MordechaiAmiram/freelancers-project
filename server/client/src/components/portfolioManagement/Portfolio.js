import React, { useState } from 'react'
import UploadWidget from '../UploadWidget'
import { Button } from '@mui/material'
import api from '../../services/BaseURL'

function Portfolio({ portfolio }) {
    const [isUpload, setIsUpload] = useState(false)
    const [imageId, setImageId] = useState('')

    const handleUpload = () => {
        setIsUpload(prev => !prev)
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
        <div style={{ width: 200, height: 100, border: 'solid 1px' }}>
            {portfolio.title}
            <div onClick={handleUpload}>{!isUpload ? 'הוספת תמונה חדשה' : 'ביטול'}</div>
            {isUpload &&
                <>
                    <UploadWidget handleImageId={handleImageId}/>
                    <Button onClick={handleSubmit}>אישור</Button>
                </>}
        </div>
    )
}

export default Portfolio