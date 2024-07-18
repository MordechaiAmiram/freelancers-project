import React from 'react'
import { Box, Rating, Typography, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

function BasicRating({ handleChange, value }) {
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
                        handleChange(newValue);
                    }}
                />
            </ThemeProvider>
        </Box>
    );
}

export default BasicRating