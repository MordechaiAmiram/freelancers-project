import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import PortfolioImages from './PortfolioImages';
import Typography from '@mui/joy/Typography';
import './portfolios.css'
import UploadWidget from '../UploadWidget';

export default function Portfolios({ portfolios, isEdit, handleImageId, handlePortfolioId, handleDeleteImage }) {
  return (
    <div>
      {portfolios?.length > 0 &&
        <Tabs
          variant="outlined"
          aria-label="Pricing plan"
          defaultValue={0}
          sx={{
            minWidth: '500px',
            minHeight: '500px',
            borderRadius: 'lg',
            boxShadow: 'sm',
            overflow: 'auto',
            backgroundColor: 'white'
          }}
        >
          <TabList
            disableUnderline
            tabFlex={1}
            sx={{
              [`& .${tabClasses.root}`]: {
                fontSize: 'sm',
                fontWeight: 'lg',
                [`&[aria-selected="true"]`]: {
                  color: 'primary.500',
                  bgcolor: 'background.surface',
                },
                [`&.${tabClasses.focusVisible}`]: {
                  outlineOffset: '-4px',
                },
              },
            }}
          >
            {portfolios?.map(portfolio => (
              <Tab key={portfolio.portfolioId}
                disableIndicator variant="soft" sx={{ flexGrow: 1 }}>
                {portfolio.title}
              </Tab>
            ))}
          </TabList>
          {portfolios?.map((portfolio, index) => (
            <TabPanel key={portfolio.portfolioId}
              value={index}>
              {isEdit &&
                <div className='add-image-btn' onClick={()=> handlePortfolioId(portfolio.portfolioId)}>
                  <UploadWidget handleImageId={handleImageId} />
                </div>}
              <Typography>
                {portfolio.description}
              </Typography>
              <div className='portfolio-images-flexbox'>
                <PortfolioImages portfolio={portfolio} handleDelete={handleDeleteImage}/>
              </div>
            </TabPanel>
          ))}
        </Tabs>}
    </div>
  );
}