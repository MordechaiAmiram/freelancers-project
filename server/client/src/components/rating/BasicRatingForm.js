import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

export default function BasicRatingForm({value, setValue}) {

    const theme = createTheme({
        direction: "rtl",
    })

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Typography component="legend">דרג</Typography>
            <ThemeProvider theme={theme}>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
            </ThemeProvider>
        </Box>
    );
}