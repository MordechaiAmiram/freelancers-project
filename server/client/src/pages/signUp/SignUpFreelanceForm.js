import React from 'react'
import './signUp.css'
import Select from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem } from '@mui/material';


function SignUpFreelanceForm({ city, street, building, suite, zipCode, title, about, serviceLocation, categoriesList, subcategoryList, subcategory, handleChange, handleSubmit }) {
    return (
        <div>
            <form className='sign-up-form'>

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
                        value={city}
                        onChange={handleChange}
                        placeholder="עיר" />
                </label>

                <label htmlFor="street">רחוב
                    <input className='sign-up-input'
                        type="text"
                        name='street'
                        value={street}
                        onChange={handleChange}
                        placeholder="רחוב" />
                </label>

                <label htmlFor="buildingNumber">מספר בנין
                    <input className='sign-up-input'
                        type="text"
                        name='building'
                        value={building}
                        onChange={handleChange}
                        placeholder="בנין" />
                </label>

                <label htmlFor="suite">מספר דירה
                    <input className='sign-up-input'
                        type="text"
                        name='suite'
                        value={suite}
                        onChange={handleChange}
                        placeholder="דירה" />
                </label>

                <label htmlFor="zipCode">מיקוד
                    <input className='sign-up-input'
                        type="text"
                        name='zipCode'
                        value={zipCode}
                        onChange={handleChange}
                        placeholder="מיקוד" />
                </label>

                <label htmlFor="title">כותרת
                    <input className='sign-up-input'
                        type="text"
                        name='title'
                        value={title}
                        onChange={handleChange}
                        placeholder="כותרת" />
                </label>

                <label htmlFor="about">אודות
                    <input className='sign-up-input'
                        type="text"
                        name='about'
                        value={about}
                        onChange={handleChange}
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
                        value={serviceLocation}
                        label="serviceLocation"
                        onChange={handleChange}
                    >
                        <MenuItem value={'unlimited'}>ללא הגבלת אזור</MenuItem>
                        <MenuItem value={'jerusalem'}>ירושלים והסביבה</MenuItem>
                        <MenuItem value={'center'}>אזור המרכז</MenuItem>
                        <MenuItem value={'north'}>אזור הצפון</MenuItem>
                        <MenuItem value={'south'}>אזור הדרום</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel>קטגוריה</InputLabel>
                    <Select
                        name='category'
                        // value={category}
                        label="category"
                        onChange={handleChange}
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
                        value={subcategory}
                        label="subcategory"
                        onChange={handleChange}
                    >
                        {subcategoryList.length > 0 &&
                            subcategoryList.map(category => (
                            <MenuItem key={category.id} value={category.id}>
                                {category.name}
                            </MenuItem>)
                        )}
                    </Select>
                </FormControl>

                <button className='sign-up-submit' onClick={handleSubmit}>אישור</button>
            </form>

        </div>
    )
}

export default SignUpFreelanceForm