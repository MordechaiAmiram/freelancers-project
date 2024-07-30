import React from 'react'
import GetImage from '../GetImage'
import './portfolios.css'

function PortfolioImages({ portfolio, handleDelete }) {
  const imageCodes = portfolio.imageCodes?.split(',')
  const imageIds = portfolio.imageIds?.split(',')
  console.log("imageCodes", imageCodes, imageCodes?.length);

  return (
    <>
      {imageCodes?.map((imageCode, index) =>
      <div key={imageCode}>
        <GetImage
          imageId={imageCode}
          width={150}
          className='portfolio-image'
        />
        <button onClick={() => handleDelete(portfolio.portfolioId, index, imageIds[index])}>del</button>
      </div>
      )}
    </>
  )
}

export default PortfolioImages