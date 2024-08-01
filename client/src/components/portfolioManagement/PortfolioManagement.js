import React, { useContext, useState } from 'react'
import CreatePortfolio from './CreatePortfolio'
import useFetch from '../../hooks/useFetch'
import { userContext } from '../../App'
import Portfolios from '../portfolios/Portfolios'
import api from '../../services/BaseURL'

function PortfolioManagement() {
    const { currentUser } = useContext(userContext)
    const [portfolios, setPortfolios] = useFetch(`/portfolios/${currentUser.freelanceId}`)
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOpen = () => {
        setIsOpen(true);
    };
    
    const handleClose = () => {
        setIsOpen(false);
    };

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
            const { data } = await api.delete(`/portfolios/${imageId}`)
        } catch (err) {
            console.error(err.message);
        }
    }

    const handleAddImage = async (portfolioId, imageCode) => {
        try {
            const body = {
                portfolioId: portfolioId,
                imageCode: imageCode
            }
            const { data } = await api.post(`/portfolios/add-image`, body)
            if(data) {
                setPortfolios(prev => {
                    const portfolioIndex = prev.findIndex(el => el.portfolioId === portfolioId);
                    const updatedPortfolio = { ...prev[portfolioIndex] };
                    
                    const imageCodes = updatedPortfolio.imageCodes.split(',');
                    const imageIds = updatedPortfolio.imageIds.split(',');
                    
                    imageCodes.push(imageCode)   
                    imageIds.push(data.insertedId)
                    
                    updatedPortfolio.imageCodes = imageCodes.join(',');
                    updatedPortfolio.imageIds = imageIds.join(',');
                    
                    const updatedPortfolios = [...prev];
                    updatedPortfolios[portfolioIndex] = updatedPortfolio;
                    
                    return updatedPortfolios;
                })
            }
        } catch (err) {
            console.error(err);
        }
    }


    return (
        <>
            <div>
                <CreatePortfolio 
                    handleClose={handleClose}
                    handleClickOpen={handleClickOpen}
                    isOpen={isOpen}
                />
            </div>
            <Portfolios
                    portfolios={portfolios}
                    isEdit={true}
                    handleAddImage={handleAddImage}
                    handleDeleteImage={handleDeleteImage}
                    isPersonalArea={true} />
        </>
    )
}

export default PortfolioManagement