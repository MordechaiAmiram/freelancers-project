import { Button, TextField } from '@mui/material'
import GetImage from '../../GetImage'
import React from 'react'

function FreelanceForm({ profile, handleLogOut, isUpdate, handleUpdate, valueProps, handleSubmit }) {
    const { firstName, lastName, email, phone, city, street, building, suite,
        accountType, profileImageId, serviceLocation, title, about, zipCode } = profile

        const {firstNameProps, lastNameProps, emailProps, phoneProps, cityProps, streetProps,
             buildingProps, suiteProps, zipCodeProps,titleProps, aboutProps, serviceLocationProps} = valueProps

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
                                sx={{width: '60%'}}
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
                                sx={{width: '60%'}}
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
                                sx={{width: '60%'}}
                            />
                        </>
                        : `מיקוד: ${zipCode}`}
                </div>
                <div>
                    {isUpdate ?
                        <>
                            אזור שירות: <TextField
                                type='text'
                                hiddenLabel
                                variant="filled"
                                size='small'
                                name='serviceLocation'
                                {...serviceLocationProps}
                                sx={{width: '60%'}}
                            />
                        </>
                        : `אזור שירות: ${serviceLocation}`}
                </div>
                {/* <div>הודעות</div>
                <div> הזמנות</div>
                <div>מי צפה בי</div> */}
                {!isUpdate && <div>{`סוג חשבון: ${accountType}`}</div>}

                <Button onClick={handleUpdate}>{isUpdate ? 'ביטול' : `עריכת פרופיל`}</Button>
                {isUpdate && <Button onClick={handleSubmit}>אישור</Button>}
                {!isUpdate &&
                    <>
                        <Button onClick={handleLogOut}>יציאה</Button>
                        <Button>מחיקת חשבון</Button>
                    </>
                }
            </div>
        </>
    )
}

export default FreelanceForm