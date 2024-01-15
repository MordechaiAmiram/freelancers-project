import React, { useContext } from 'react'
import CreatePortfolio from './CreatePortfolio'
import useFetch from '../../hooks/useFetch'
import { userContext } from '../../App'
import Portfolio from './Portfolio'

function PortfolioManagement() {
    const { currentUser } = useContext(userContext)
    const [portfolios] = useFetch(`/portfolios/${currentUser.freelanceId}`)

    return (
        <div className='portfolio-management'>
            <CreatePortfolio />
            {portfolios?.length > 0 &&
                <div>
                    התיקים שלך
                    {portfolios.map(portfolio => (
                        <Portfolio
                            key={portfolio.portfolioId}
                            portfolio={portfolio} />
                    ))}
                </div>}
        </div>
    )
}

export default PortfolioManagement