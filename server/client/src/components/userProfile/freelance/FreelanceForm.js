import { Button, TextField } from '@mui/material'
import GetImage from '../../GetImage'
import React from 'react'

function FreelanceForm({ profile, handleLogOut, isUpdate, handleUpdate, firstNameProps }) {
    const { firstName, lastName, email, phone, city, street, building, suite,
        accountType, profileImageId, serviceLocation, title, about, zipCode } = profile

    return (
        <>
            <div className='private-profile-container'>
                <GetImage imageId={profileImageId} width={150} className={'private-profile-image'} />
                <div>
                    {isUpdate ?
                        <> שם פרטי: <TextField
                            type='text'
                            // label="שם"
                            {...firstNameProps}
                            variant="standard"
                            size='small'
                            name='firstName'
                            // value={firstName}
                        /> <br />
                            שם משפחה: <TextField
                                type='text'
                                // label="שם"
                                variant="standard"
                                size='small'
                                name='lastName'
                                value={lastName}
                            />
                        </>
                        : `שם: ${firstName} ${lastName}`}
                </div>

                <div>
                    {isUpdate ?
                        <>כותרת: <TextField
                            type='text'
                            // label="כותרת"
                            variant="standard"
                            size='small'
                            name='title'
                            value={title}
                        />
                        </>
                        : `כותרת: ${title}`}
                </div>

                <div>
                    {isUpdate ?
                        <>
                            אודות: <TextField
                                type='text'
                                // label="כותרת"
                                variant="standard"
                                size='small'
                                name='about'
                                value={about}
                            />
                        </>
                        : `אודות: ${about}`}
                </div>

                <div>
                    {isUpdate ?
                        <>
                            דוא"ל: <TextField
                                type='text'
                                // label="כותרת"
                                variant="standard"
                                size='small'
                                name='email'
                                value={email}
                            />
                        </>
                        : `דוא"ל: ${email}`}
                </div>

                <div>
                    {isUpdate ?
                        <>
                            טלפון: <TextField
                                type='text'
                                // label="כותרת"
                                variant="standard"
                                size='small'
                                name='phone'
                                value={phone}
                            />
                        </>
                        : `טלפון: ${phone}`}
                </div>

                <div>
                    {isUpdate ?
                        <>
                            עיר: <TextField
                                type='text'
                                // label="כותרת"
                                variant="standard"
                                size='small'
                                name='city'
                                value={city}
                            />
                        </>
                        : `עיר: ${city}`}
                </div>
                <div>
                    {isUpdate ?
                        <>
                            רחוב: <TextField
                                type='text'
                                // label="כותרת"
                                variant="standard"
                                size='small'
                                name='street'
                                value={street}
                            /><br />
                            רחוב: <TextField
                                type='text'
                                // label="כותרת"
                                variant="standard"
                                size='small'
                                name='building'
                                value={building}
                            /><br />
                            דירה: <TextField
                                type='text'
                                // label="כותרת"
                                variant="standard"
                                size='small'
                                name='suite'
                                value={suite}
                            />

                        </>
                        : `רחוב: ${street} ${building}/${suite}`}
                </div>
                <div>
                    {isUpdate ?
                        <>
                            מיקוד: <TextField
                                type='text'
                                // label="כותרת"
                                variant="standard"
                                size='small'
                                name='zipCode'
                                value={zipCode}
                            />
                        </>
                        : `מיקוד: ${zipCode}`}
                </div>
                <div>
                    {isUpdate ?
                        <>
                            מיקוד: <TextField
                                type='text'
                                // label="כותרת"
                                variant="standard"
                                size='small'
                                name='serviceLocation'
                                value={serviceLocation}
                            />
                        </>
                        : `אזור שירות: ${serviceLocation}`}
                </div>
                {/* <div>הודעות</div>
                <div> הזמנות</div>
                <div>מי צפה בי</div> */}
                <div>{`סוג חשבון: ${accountType}`}</div>

                <Button onClick={handleUpdate}>{isUpdate ? 'ביטול' : `עריכת פרופיל`}</Button>

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