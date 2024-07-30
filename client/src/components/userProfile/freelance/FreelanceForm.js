import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, useMediaQuery } from '@mui/material'
import GetImage from '../../GetImage'
import UploadWidget from '../../UploadWidget'
import React from 'react'
import LogOut from '../../LogOut'
import './freelance.css'

function FreelanceForm({ profile, isUpdate, handleUpdate, valueProps, handleSubmit }) {
    const { firstName, lastName, email, phone, city, street, building, suite,
        accountType, profileImageId, serviceLocation, title, about, zipCode } = profile

    const { firstNameProps, lastNameProps, emailProps, phoneProps, cityProps, streetProps,
        buildingProps, suiteProps, zipCodeProps, titleProps, aboutProps, serviceLocationProps } = valueProps

    const matches1150 = useMediaQuery('(min-width:1150px)');
    const matches900 = useMediaQuery('(min-width:900px)');
    const matches830 = useMediaQuery('min-width-830px')


    return (
        <>
            <div className='private-profile-container background-color-white'>
                <GetImage imageId={profileImageId} width={150} className={'private-profile-picture'} />
                <>
                    {
                    !isUpdate &&
                    <>
                        <div className='profile-details-wrapper'>
                            <div><span className='title'>שם: </span>{`${firstName} ${lastName}`}</div>
                            <div><span className='title'>כותרת: </span>{` ${title}`}</div>
                            <div><span className='title'>אודות: </span>{`${about}`}</div>
                            <div><span className='title'>דוא"ל: </span>{` ${email}`}</div>
                            <div><span className='title'>טלפון: </span>{` ${phone}`}</div>
                            <div><span className='title'>עיר: </span>{`${city}`}</div>
                            <div><span className='title'>רחוב: </span>{`${street} ${building}/${suite}`}</div>
                            <div><span className='title'>מיקוד: </span>{`${zipCode}`}</div>
                            <div><span className='title'>אזור שירות: </span>{`${serviceLocation}`}</div>
                            <div><span className='title'>סוג חשבון: </span>{`${accountType}`}</div>
                        </div>
                        <div>
                                <Button onClick={handleUpdate}>עריכת פרופיל</Button>
                                <LogOut />
                        </div>
                    </>
                    }

                    {
                    isUpdate &&
                    <div className='edit-details-wrapper'>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={matches1150? 6  : 20} >
                            שם פרטי: 
                            <TextField
                                type='text'
                                hiddenLabel
                                // label='שם פרטי'
                                variant="filled"
                                size='small'
                                name='firstName'
                                {...firstNameProps}
                                sx={{ width: '100%' }}
                            />
                            </Grid>
                            <Grid item xs={matches1150? 6  : 20} >
                                שם משפחה: 
                                <TextField
                                    type='text'
                                    hiddenLabel
                                    // label='שם משפחה'
                                    variant="filled"
                                    size='small'
                                    name='lastName'
                                    {...lastNameProps}
                                    sx={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={matches1150? 6  : 20} >                       
                                דוא"ל: 
                                <TextField
                                    type='text'
                                    hiddenLabel
                                    variant="filled"
                                    size='small'
                                    name='email'
                                    {...emailProps}
                                    sx={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={matches1150? 6  : 20} > 
                                טלפון: 
                                <TextField
                                    type='text'
                                    hiddenLabel
                                    variant="filled"
                                    size='small'
                                    name='phone'
                                    {...phoneProps}
                                    sx={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={matches1150? 3  : 6} >
                                עיר: 
                                <TextField
                                    type='text'
                                    hiddenLabel
                                    variant="filled"
                                    size='small'
                                    name='city'
                                    {...cityProps}
                                    sx={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={matches1150? 3  : 6} >
                                רחוב: 
                                <TextField
                                    type='text'
                                    hiddenLabel
                                    variant="filled"
                                    size='small'
                                    name='street'
                                    {...streetProps}
                                    sx={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={matches1150? 2  : 4} >
                                בנין: 
                                <TextField
                                    type='text'
                                    hiddenLabel
                                    variant="filled"
                                    size='small'
                                    name='building'
                                    {...buildingProps}
                                    sx={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={matches1150? 2  : 4} >
                                דירה: 
                                <TextField
                                    type='text'
                                    hiddenLabel
                                    variant="filled"
                                    size='small'
                                    name='suite'
                                    {...suiteProps}
                                    sx={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={matches1150? 2  : 4} >
                                מיקוד: 
                                <TextField
                                    type='text'
                                    hiddenLabel
                                    variant="filled"
                                    size='small'
                                    name='zipCode'
                                    {...zipCodeProps}
                                    sx={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={matches1150? 6  : 20} >
                                כותרת: 
                                <TextField
                                    type='text'
                                    hiddenLabel
                                    variant="filled"
                                    size='small'
                                    name='title'
                                    {...titleProps}
                                    sx={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={matches1150 ? 6  : 20} >
                                אודות: 
                                <TextField
                                    type='text'
                                    hiddenLabel
                                    variant="filled"
                                    size='small'
                                    name='about'
                                    multiline
                                    maxRows={4}
                                    {...aboutProps}
                                    sx={{ width: '100%', minWidth: !matches1150 ? '520px' : '300px' }} //minWidth: '300px' this is a critical style for this multiline textField 
                                                                            //to avoid this issue https://github.com/mui/base-ui/issues/167
                                />
                            </Grid>
                            <Grid item xs={matches1150? 6  : 20}>                                
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                    <InputLabel>בחר איזור שירות</InputLabel>
                                    <Select
                                        name='serviceLocation'
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
                            <Grid item xs={matches1150? 6  : 20}>
                                <UploadWidget />
                            </Grid>
                        </Grid>
                        <Button onClick={handleUpdate}>{isUpdate ? 'ביטול' : `עריכת פרופיל`}</Button>
                        <Button onClick={handleSubmit}>אישור</Button>
                        </div>
                        }
                </>
            </div>
        </>
    )
}

export default FreelanceForm