import { Button, TextField } from '@mui/material'
import React from 'react'

function ClientForm({ profile, handleLogOut, valueProps, isUpdate, handleSubmit, handleUpdate }) {
    const { firstName, lastName, email, phone, isAdmin } = profile
    const { firstNameProps, lastNameProps, emailProps, phoneProps } = valueProps
    return (
        <div className='private-profile-container'>
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


            { !isUpdate ?
                isAdmin === 1 ?
                <div>{`סוג חשבון: מנהל`}</div> :
                <div>{`סוג חשבון: לקוח`}</div>
                : ''}
            <Button onClick={handleUpdate}>{isUpdate ? 'ביטול' : `עריכת פרופיל`}</Button>
            {isUpdate && <Button onClick={handleSubmit}>אישור</Button>}
            {!isUpdate &&
                <>
                    <Button onClick={handleLogOut}>יציאה</Button>
                    {/* <Button>מחיקת חשבון</Button> */}
                </>
            }

        </div>
    )
}

export default ClientForm