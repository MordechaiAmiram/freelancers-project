import React from 'react'
import './logIn.css'
// import InputField from '../../components/form/InputField'
// import { Button } from '@mui/material'
function LogInForm() {
    return (
        <div>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet" />

            <form className='log-in-form'>
                <h3>כניסה</h3>

                {/* <InputField
                    label={'Email or Phone'}
                    sx={{ width: '100%' }} /> */}

                <label for="username">שם משתמש
                    <input type="text"
                        placeholder="שם משתמש" />
                </label>

                <label for="password">סיסמה
                    <input type="password"
                        placeholder="סיסמה" />
                </label>

                <button>היכנס</button>
                <div className="social">
                    <div className="go"><i className="fab fa-google"></i>  Google</div>
                    <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                </div>
            </form>
        </div>
    )
}

export default LogInForm