import React from 'react'
import './signUp.css'

function SignUpFreelanceForm() {
    return (
        <div>
            <form className='sign-up-form'>

                <h3>הרשמה</h3>

                <label>מדינה
                    <input className='sign-up-input'
                        type="text"
                        placeholder="מדינה" />
                </label>

                <label>עיר
                    <input className='sign-up-input'
                        type="text"
                        placeholder="עיר" />
                </label>

                <label for="username">רחוב
                    <input className='sign-up-input'
                        type="text"
                        placeholder="רחוב" />
                </label>

                <label for="phone">מספר בנין
                    <input className='sign-up-input'
                        type="text"
                        placeholder="בנין" />
                </label>

                <label for="email">מספר דירה
                    <input className='sign-up-input'
                        type="text"
                        placeholder="דירה" />
                </label>

                <label for="password">מיקוד
                    <input className='sign-up-input'
                        type="password"
                        placeholder="מיקוד" />
                </label>
                <button className='sign-up-submit'>אישור</button>
            </form>
        </div>
    )
}

export default SignUpFreelanceForm