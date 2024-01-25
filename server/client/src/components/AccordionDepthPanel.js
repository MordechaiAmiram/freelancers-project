import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import BasicRating from './rating/BasicRating';
import { Button, TextareaAutosize } from '@mui/material';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export default function AccordionDepthPanel({ textProps, handleChange, value, handleClick }) {
  const [isAccordionExpanded, setIsAccordionExpanded] = React.useState(false);

  const handleAccordionToggle = () => {
    setIsAccordionExpanded(!isAccordionExpanded);
  };

  return (
    <AccordionGroup
      variant="outlined"
      transition="0.8s"
      sx={{
        width: '90%',
        borderRadius: 'lg',
        [`& .${accordionSummaryClasses.button}:hover`]: {
          bgcolor: 'transparent',
        },
        [`& .${accordionDetailsClasses.content}`]: {
          boxShadow: (theme) => `inset 0 1px ${theme.vars.palette.divider}`,
          [`&.${accordionDetailsClasses.expanded}`]: {
            paddingBlock: '0.75rem',
          },
        },
      }}
    >
      <Accordion
        expanded={isAccordionExpanded}
        onChange={handleAccordionToggle}>
        <AccordionSummary>הוספת ביקורת</AccordionSummary>
        <AccordionDetails variant="soft">
          <div className='add-review-content'>
            <BasicRating
              handleChange={handleChange}
              value={value}
            />
            <TextareaAutosize
              sx={{ display: 'flex', width: '100%' }}
              aria-label="empty textarea"
              minRows={8}
              placeholder="הוסף ביקורת"
              {...textProps}
            />
            <Button
              sx={{ maxWidth: 'fit-content', margin: 'auto' }}
              onClick={() => {
                handleAccordionToggle();
                handleClick();
              }}
            >
              <SendOutlinedIcon />
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
