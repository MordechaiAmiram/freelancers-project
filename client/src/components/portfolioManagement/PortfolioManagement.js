import React, { useContext, useEffect, useState } from 'react'
import CreatePortfolio from './CreatePortfolio'
import useFetch from '../../hooks/useFetch'
import { userContext } from '../../App'
import Portfolios from '../portfolios/Portfolios'
import api from '../../services/BaseURL'

function PortfolioManagement() {
    const { currentUser } = useContext(userContext)
    const [portfolios, setPortfolios] = useFetch(`/portfolios/${currentUser.freelanceId}`)
    const [imageId, setImageId] = useState('')
    const [portfolioId, setPortfolioId] = useState()

    const handleImageId = (id) => {
        setImageId(id)
    }

    const handlePortfolioId = (id) => {
        setPortfolioId(id)
    }

    const handleDeleteImage = async (portfolioId, imageIndex, imageId) => {
        setPortfolios(prev => {
            const portfolioIndex = prev.findIndex(el => el.portfolioId === portfolioId);
            if (portfolioIndex === -1) return prev; 
        
            const updatedPortfolio = { ...prev[portfolioIndex] };

            const imageCodes = updatedPortfolio.imageCodes.split(',');
            const imageIds = updatedPortfolio.imageIds.split(',');
        
            imageCodes.splice(imageIndex, 1);
            imageIds.splice(imageIndex, 1);
        
            updatedPortfolio.imageCodes = imageCodes.join(',') || null;
            updatedPortfolio.imageIds = imageIds.join(',') || null;
        
            const updatedPortfolios = [...prev];
            updatedPortfolios[portfolioIndex] = updatedPortfolio;
                
            return updatedPortfolios;
        })
        try {
            const [data] = await api.delete(`/portfolios/${imageId}`)
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        const addImage = async () => {
            try {
                const body = {
                    portfolioId: portfolioId,
                    imageCode: imageId
                }
                const { data } = await api.post(`/portfolios/add-image`, body)
            } catch (err) {
                console.error(err);
            }
        }
        addImage()
    }, [imageId])


    return (
        <>
            <div className=''>
                <CreatePortfolio />
            </div>
            <Portfolios
                    portfolios={portfolios}
                    isEdit={true}
                    handleImageId={handleImageId}
                    handlePortfolioId={handlePortfolioId}
                    handleDeleteImage={handleDeleteImage} />
        </>
    )
}

export default PortfolioManagement