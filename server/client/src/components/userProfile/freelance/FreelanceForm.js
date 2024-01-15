import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import GetImage from '../../GetImage'
import UploadWidget from '../../UploadWidget'
import React from 'react'
import LogOut from '../../LogOut'
import PortfolioManagement from '../../portfolioManagement/PortfolioManagement'

function FreelanceForm({ profile, isUpdate, handleUpdate, valueProps, handleSubmit }) {
    const { firstName, lastName, email, phone, city, street, building, suite,
        accountType, profileImageId, serviceLocation, title, about, zipCode } = profile

    const { firstNameProps, lastNameProps, emailProps, phoneProps, cityProps, streetProps,
        buildingProps, suiteProps, zipCodeProps, titleProps, aboutProps, serviceLocationProps } = valueProps

    return (
        <>
            <div className='private-profile-container'>
                <GetImage imageId={profileImageId} width={150} className={'private-profile-image'} />
                <div>
                    {isUpdate ?
                        <> שם פרטי: <TextField
                            type='text'
                            hiddenLabel
                            variant="filled"
                            size='small'
                            name='firstName'
                            {...firstNameProps}
                            sx={{ width: '60%' }}
                        /> <br />
                            שם משפחה: <TextField
                                type='text'
                                hiddenLabel
                                variant="filled"
                                size='small'
                                name='lastName'
                                {...lastNameProps}
                                sx={{ width: '60%' }}
                            />
                        </>
                        : `שם: ${firstName} ${lastName}`}
                </div>

                <div>
                    {isUpdate ?
                        <>כותרת: <TextField
                            type='text'
                            hiddenLabel
                            variant="filled"
                            size='small'
                            name='title'
                            {...titleProps}
                            sx={{ width: '60%' }}
                        />
                        </>
                        : `כותרת: ${title}`}
                </div>

                <div>
                    {isUpdate ?
                        <>
                            אודות: <TextField
                                type='text'
                                hiddenLabel
                                variant="filled"
                                size='small'
                                name='about'
                                {...aboutProps}
                                sx={{ width: '60%' }}
                            />
                        </>
                        : `אודות: ${about}`}
                </div>

                <div>
                    {isUpdate ?
                        <>
                            דוא"ל: <TextField
                                type='text'
                                hiddenLabel
                                variant="filled"
                                size='small'
                                name='email'
                                {...emailProps}
                                sx={{ width: '60%' }}
                            />
                        </>
                        : `דוא"ל: ${email}`}
                </div>

                <div>
                    {isUpdate ?
                        <>
                            טלפון: <TextField
                                type='text'
                                hiddenLabel
                                variant="filled"
                                size='small'
                                name='phone'
                                {...phoneProps}
                                sx={{ width: '60%' }}
                            />
                        </>
                        : `טלפון: ${phone}`}
                </div>

                <div>
                    {isUpdate ?
                        <>
                            עיר: <TextField
                                type='text'
                                hiddenLabel
                                variant="filled"
                                size='small'
                                name='city'
                                {...cityProps}
                                sx={{ width: '60%' }}
                            />
                        </>
                        : `עיר: ${city}`}
                </div>
                <div>
                    {isUpdate ?
                        <>
                            רחוב: <TextField
                                type='text'
                                hiddenLabel
                                variant="filled"
                                size='small'
                                name='street'
                                {...streetProps}
                                sx={{ width: '60%' }}
                            /><br />
                            בנין: <TextField
                                type='text'
                                hiddenLabel
                                variant="filled"
                                size='small'
                                name='building'
                                {...buildingProps}
                                sx={{ width: '60%' }}
                            /><br />
                            דירה: <TextField
                                type='text'
                                hiddenLabel
                                variant="filled"
                                size='small'
                                name='suite'
                                {...suiteProps}
                                sx={{ width: '60%' }}
                            />
                        </>
                        : `רחוב: ${street} ${building}/${suite}`}
                </div>
                <div>
                    {isUpdate ?
                        <>
                            מיקוד: <TextField
                                type='text'
                                hiddenLabel
                                variant="filled"
                                size='small'
                                name='zipCode'
                                {...zipCodeProps}
                                sx={{ width: '60%' }}
                            />
                        </>
                        : `מיקוד: ${zipCode}`}
                </div>
                <div>
                    {isUpdate ?
                        <>
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
                        </>
                        : `אזור שירות: ${serviceLocation}`}
                </div>
                {isUpdate && <><UploadWidget /> <br /></>}

                {/* <div>הודעות</div>
                <div> הזמנות</div>
                <div>מי צפה בי</div> */}
                {!isUpdate && <div>{`סוג חשבון: ${accountType}`}</div>}

                <Button onClick={handleUpdate}>{isUpdate ? 'ביטול' : `עריכת פרופיל`}</Button>
                {isUpdate && <Button onClick={handleSubmit}>אישור</Button>}
                {!isUpdate &&
                    <>
                        <LogOut />
                        {/* <Button>מחיקת חשבון</Button> */}
                    </>
                }
                <PortfolioManagement />
            </div>
        </>
    )
}

export default FreelanceForm