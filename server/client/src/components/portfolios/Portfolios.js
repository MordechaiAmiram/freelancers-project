import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import PortfolioImages from './PortfolioImages';
import Typography from '@mui/joy/Typography';
import './portfolios.css'

export default function Portfolios({ portfolios }) {
  return (
    <>
      {portfolios?.length > 0 &&
        <Tabs
          variant="outlined"
          aria-label="Pricing plan"
          defaultValue={0}
          sx={{
            width: '90%',
            margin: '0 auto auto 0',
            minWidth: 500,
            borderRadius: 'lg',
            boxShadow: 'sm',
            overflow: 'auto',
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
              <Typography>
                {portfolio.description}
              </Typography>
              <div className='portfolio-images-flexbox'>
                <PortfolioImages portfolio={portfolio} />
              </div>

            </TabPanel>
          ))}
        </Tabs>}
    </>
  );
}