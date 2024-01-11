import React from 'react'
import useFetch from '../../hooks/useFetch'

function Portfolios({ freelanceId }) {
    const [portfolios] = useFetch(`/portfolios/${freelanceId}`)//array of objects

    return (
        <>
            {portfolios &&
                portfolios.map(portfolio => (<div>
                get portfolio images
                </div>))}
        </>
    )
}

export default Portfolios