import useMediaQuery from '@mui/material/useMediaQuery';

function SimpleMediaQuery({width}) {
    const matches = useMediaQuery('(min-width:600px)');
    return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}