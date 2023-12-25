import React from 'react'
import './signUp.css'
import Select from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import UploadWidget from '../../hooks/UploadWidget';



function SignUpFreelanceForm({ cityProps, streetProps, buildingProps, suiteProps, zipCodeProps, titleProps, aboutProps, serviceLocationProps, categoriesList, subcategoryList, subcategoryProps, handleSubmit, handleBack, handleCategorySelect }) {
    return (
        <div>
            <form className='sign-up-form'>
                <div className='back-button' onClick={handleBack}> <ArrowCircleRightIcon /></div>
                <h3>הרשמה לפרילנס</h3>

                {/* <label htmlFor='country'>מדינה
                    <input className='sign-up-input'
                        type="text"
                        name='country'
                        placeholder="מדינה" />
                </label> */}

                <label htmlFor='city'>עיר
                    <input className='sign-up-input'
                        type="text"
                        name='city'
                        {...cityProps}
                        placeholder="עיר" />
                </label>

                <label htmlFor="street">רחוב
                    <input className='sign-up-input'
                        type="text"
                        name='street'
                        {...streetProps}
                        placeholder="רחוב" />
                </label>

                <label htmlFor="buildingNumber">מספר בנין
                    <input className='sign-up-input'
                        type="text"
                        name='building'
                        {...buildingProps}
                        placeholder="בנין" />
                </label>

                <label htmlFor="suite">מספר דירה
                    <input className='sign-up-input'
                        type="text"
                        name='suite'
                        {...suiteProps}
                        placeholder="דירה" />
                </label>

                <label htmlFor="zipCode">מיקוד
                    <input className='sign-up-input'
                        type="text"
                        name='zipCode'
                        {...zipCodeProps}
                        placeholder="מיקוד" />
                </label>

                <label htmlFor="title">כותרת
                    <input className='sign-up-input'
                        type="text"
                        name='title'
                        {...titleProps}
                        placeholder="כותרת" />
                </label>

                <label htmlFor="about">אודות
                    <input className='sign-up-input'
                        type="text"
                        name='about'
                        {...aboutProps}
                        placeholder="אודות" />
                </label>


                {/* <label htmlFor="serviceLocation">בחר אזור שירות
                    <select name='serviceLocation'>
                        <option value={'unlimited'}>ללא הגבלת אזור</option>
                        <option value={'jerusalem'}>ירושלים והסביבה</option>
                        <option value={'center'}>אזור המרכז</option>
                        <option value={'north'}>אזור הצפון</option>
                        <option value={'south'}>אזור הדרום</option>
                    </select>
                </label> */}


                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel>בחר איזור שירות</InputLabel>
                    <Select
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

                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel>קטגוריה</InputLabel>
                    <Select
                        name='category'
                        label="category"
                        onChange={(e)=> handleCategorySelect(e.target.value)}
                    >
                        {categoriesList.length > 0 &&
                            categoriesList.map(category => (
                                <MenuItem key={category.id} value={category.id}>
                                    {category.name}
                                </MenuItem>)
                            )}
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel>תת קטגוריה</InputLabel>
                    <Select
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
                    <UploadWidget />
                </FormControl>

                <button className='sign-up-submit' onClick={handleSubmit}>אישור</button>
            </form>

        </div>
    )
}

export default SignUpFreelanceForm