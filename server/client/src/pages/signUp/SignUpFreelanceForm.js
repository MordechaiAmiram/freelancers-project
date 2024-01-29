import React from 'react'
import './signUp.css'
import Select from '@mui/material/Select';
import { Avatar, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, TextField, useMediaQuery } from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import UploadWidget from '../../components/UploadWidget';

function SignUpFreelanceForm(props) {
    const { cityProps, streetProps, buildingProps, suiteProps, zipCodeProps, titleProps,
        aboutProps, serviceLocationProps, categoriesList, subcategoryList, subcategoryProps,
        handleImageId, handleSubmit, handleBack, handleCategorySelect, message } = props
    const matches = useMediaQuery('(min-width:1550px)');

    return (
        <>
            <div className='sign-up-wrapper'>
                <form className='sign-up-form' onSubmit={handleSubmit}>

                    <div className='back-button-wrapper' onClick={handleBack}>
                        <IconButton>
                            <ArrowCircleRightOutlinedIcon sx={{ color: '#fff' }} />
                        </IconButton>
                    </div>

                    <Avatar sx={{ bgcolor: '#03BFCB' }}>
                        <LockOutlinedIcon fontSize='medium' />
                    </Avatar>

                    <h3>הרשמה לפרילנס</h3>

                    <Grid container spacing={2}>
                        <Grid item xs={6} >
                            <TextField
                                label='עיר'
                                required
                                {...cityProps}
                                variant="outlined"
                                type='text'
                                name='city'
                                sx={{ width: '100%' }}
                            />
                        </Grid>
                        <Grid item xs={6} >
                            <TextField
                                label='רחוב'
                                required
                                {...streetProps}
                                variant="outlined"
                                type='text'
                                name='street'
                                sx={{ width: '100%' }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label='מספר בנין'
                                required
                                {...buildingProps}
                                variant="outlined"
                                type='text'
                                name='buildingNumber'
                                sx={{ width: '100%' }}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                label='מספר דירה'
                                required
                                {...suiteProps}
                                variant="outlined"
                                type='text'
                                name='suite'
                                sx={{ width: '100%' }}
                            />
                        </Grid>
                        <Grid item xs={30}>
                            <TextField
                                label='מיקוד'
                                required
                                {...zipCodeProps}
                                variant="outlined"
                                type='text'
                                name='zipCode'
                                sx={{ width: '100%' }}
                            />
                        </Grid>
                        <Grid item xs={20}>
                            <TextField
                                label='כותרת'
                                required
                                {...titleProps}
                                variant="outlined"
                                type='text'
                                name='title'
                                sx={{ width: '100%' }}
                            />
                        </Grid>
                        <Grid item xs={20}>
                            <TextField
                                label='אודות'
                                required
                                multiline
                                {...aboutProps}
                                variant="outlined"
                                type='text'
                                name='about'
                                sx={{ width: '100%' }}
                            />
                        </Grid>
                        <Grid item xs={matches? 4: 20}>
                            <FormControl sx={{ width: '100%' }}>
                                <InputLabel>בחר איזור שירות</InputLabel>
                                <Select
                                    required
                                    name='serviceLocation'
                                    label="serviceLocation"
                                    {...serviceLocationProps}
                                >
                                    <MenuItem value={'ללא הגבלה'}>ללא הגבלת אזור</MenuItem>
                                    <MenuItem value={'ירושלים והסביבה'}>ירושלים והסביבה</MenuItem>
                                    <MenuItem value={'אזור המרכז'}>אזור המרכז</MenuItem>
                                    <MenuItem value={'אזור הצפון'}>אזור הצפון</MenuItem>
                                    <MenuItem value={'אזור הדרום'}>אזור הדרום</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={matches? 4: 6}>
                            <FormControl sx={{ width: '100%' }}>
                                <InputLabel>קטגוריה</InputLabel>
                                <Select
                                    required
                                    name='category'
                                    label="category"
                                    onChange={(e) => handleCategorySelect(e.target.value)}
                                >
                                    {categoriesList.length > 0 &&
                                        categoriesList.map(category => (
                                            <MenuItem key={category.id} value={category.id}>
                                                {category.name}
                                            </MenuItem>)
                                        )}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={matches? 4: 6}>
                            <FormControl sx={{ width: '100%' }}>
                                <InputLabel>תת קטגוריה</InputLabel>
                                <Select
                                    required
                                    name='subcategory'
                                    label="subcategory"
                                    {...subcategoryProps}
                                >
                                    {subcategoryList.length > 0 &&
                                        subcategoryList.map(category => (
                                            <MenuItem key={category.id} value={category.id}>
                                                {category.name}
                                            </MenuItem>)
                                        )}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={20}>
                            <UploadWidget handleImageId={handleImageId} />
                        </Grid>
                        <Grid item xs={20}>
                            <Button type='submit'>הרשמה</Button>
                        </Grid>
                    </Grid>
                </form>
                <p>{message}</p>
            </div>
        </>
    )
}

export default SignUpFreelanceForm