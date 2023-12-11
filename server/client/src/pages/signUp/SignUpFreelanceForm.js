import React from 'react'
import './signUp.css'
import Select from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem } from '@mui/material';


function SignUpFreelanceForm({serviceLocation, handleChange}) {
    return (
        <div>
            <form className='sign-up-form'>

                <h3>הרשמה</h3>

                <label for='country'>מדינה
                    <input className='sign-up-input'
                        type="text"
                        name='country'
                        placeholder="מדינה" />
                </label>

                <label for='city'>עיר
                    <input className='sign-up-input'
                        type="text"
                        name='city'
                        placeholder="עיר" />
                </label>

                <label for="street">רחוב
                    <input className='sign-up-input'
                        type="text"
                        name='street'
                        placeholder="רחוב" />
                </label>

                <label for="buildingNumber">מספר בנין
                    <input className='sign-up-input'
                        type="text"
                        name='buildingNumber'
                        placeholder="בנין" />
                </label>

                <label for="suite">מספר דירה
                    <input className='sign-up-input'
                        type="text"
                        name='suite'
                        placeholder="דירה" />
                </label>

                <label for="zipCode">מיקוד
                    <input className='sign-up-input'
                        type="text"
                        name='zipCode'
                        placeholder="מיקוד" />
                </label>
                {/* <label for="serviceLocation">בחר אזור שירות
                    <select name='serviceLocation'>
                        <option value={'unlimited'}>ללא הגבלת אזור</option>
                        <option value={'jerusalem'}>ירושלים והסביבה</option>
                        <option value={'center'}>אזור המרכז</option>
                        <option value={'north'}>אזור הצפון</option>
                        <option value={'south'}>אזור הדרום</option>
                    </select>
                </label> */}


            <FormControl sx={{ m: 1, minWidth: 220 }}>
                <InputLabel>בחר איזור שירות</InputLabel>
                <Select
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
            
                <button className='sign-up-submit'>אישור</button>
            </form>

        </div>
    )
}

export default SignUpFreelanceForm