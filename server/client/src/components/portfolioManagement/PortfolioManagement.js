import React, { useContext, useEffect, useState } from 'react'
import CreatePortfolio from './CreatePortfolio'
import useFetch from '../../hooks/useFetch'
import { userContext } from '../../App'
import Portfolios from '../portfolios/Portfolios'
import api from '../../services/BaseURL'

function PortfolioManagement() {
    const { currentUser } = useContext(userContext)
    const [portfolios] = useFetch(`/portfolios/${currentUser.freelanceId}`)
    const [imageId, setImageId] = useState('')
    const [portfolioId, setPortfolioId] = useState()

    const handleImageId = (id) => {
        setImageId(id)
    }
    const handlePortfolioId = (id) => {
        setPortfolioId(id)
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
        <div className='portfolio-management'>
            <CreatePortfolio />
            <Portfolios
                portfolios={portfolios}
                isEdit={true}
                handleImageId={handleImageId}
                handlePortfolioId={handlePortfolioId} />
        </div>
    )
}

export default PortfolioManagement