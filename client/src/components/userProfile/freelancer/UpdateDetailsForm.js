import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { Button, DialogActions, DialogContent, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, useMediaQuery } from '@mui/material';
import UploadWidget from '../../UploadWidget';

function UpdateDetailsForm({ handleClose, isOpen, valueProps, handleSubmit}) {
    const { firstNameProps, lastNameProps, emailProps, phoneProps, cityProps, streetProps,
        buildingProps, suiteProps, zipCodeProps, titleProps, aboutProps, serviceLocationProps } = valueProps

    const matches1150 = useMediaQuery('(min-width:1150px)');
    const matches900 = useMediaQuery('(min-width:900px)');
    const matches830 = useMediaQuery('min-width-830px');

  return (
        <Dialog  
            maxWidth={'md'} 
            onClose={handleClose} 
            open={isOpen}
            >
            <DialogTitle sx={{textAlign: 'center'}}>עריכת פרטים</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
            >
            <CloseIcon />
            </IconButton>
            <DialogContent dividers>
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
                                <InputLabel>באיזה איזור אתה נותן שירות?</InputLabel>
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
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=> { handleSubmit(); handleClose() }}>אישור</Button>
            </DialogActions>
        </Dialog>
  );
}


export default UpdateDetailsForm;
