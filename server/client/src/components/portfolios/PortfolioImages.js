import React from 'react'
import GetImage from '../GetImage'
import './portfolios.css'

function PortfolioImages({ portfolio }) {
  const imageCodes = portfolio.imageCodes?.split(',')

  return (
    <>
      {imageCodes?.map(imageCode =>
        <GetImage
          imageId={imageCode}
          width={150}
          className='portfolio-image'
        />
      )}
    </>
  )
}

export default PortfolioImages