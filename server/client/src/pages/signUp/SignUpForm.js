import React from 'react'
import './signUp.css'
function SignUpForm({ firstNameProps, lastNameProps, usernameProps, emailProps, phoneProps, passwordProps, handleSubmit, continueAsFreelance }) {
    return (
        <div>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet" />

            <form className='sign-up-form'>
                <h3>הרשמה</h3>

                {/* <InputField
            label={'Email or Phone'}
            sx={{ width: '100%' }} /> */}

                <label id='firstName' htmlFor="firstName">שם פרטי
                    <input
                        // id='firstname'
                        className='sign-up-input'
                        type="text"
                        name='firstName'
                        {...firstNameProps}
                        placeholder="שם פרטי" />
                </label>

                <label id='lastName' htmlFor="lastName">שם משפחה
                    <input className='sign-up-input'
                        // id='lastname'
                        type="text"
                        name='lastName'
                        {...lastNameProps}
                        placeholder="שם משפחה" />
                </label>

                <label htmlFor="username">שם משתמש
                    <input className='sign-up-input'
                        type="text"
                        name='username'
                        {...usernameProps}
                        placeholder="שם משתמש" />
                </label>

                <label htmlFor="phone">טלפון
                    <input className='sign-up-input'
                        type="text"
                        name='phone'
                        {...phoneProps}
                        placeholder="טלפון" />
                </label>

                <label htmlFor="email">דואר אלקטרוני
                    <input className='sign-up-input'
                        type="text"
                        name='email'
                        {...emailProps}
                        placeholder="מייל" />
                </label>

                <label htmlFor="password">סיסמה
                    <input className='sign-up-input'
                        type="password"
                        name='password'
                        {...passwordProps}
                        placeholder="סיסמה" />
                </label>

                <div className='submit-btns'>
                    <button className='sign-up-submit' onClick={handleSubmit}>הרשמה כלקוח</button>
                    <button className='sign-up-submit' onClick={continueAsFreelance}>הרשמה כפרילנס</button>
                </div>
                {/* <div className="social">
                    <div className="go"><i className="fab fa-google"></i>  Google</div>
                    <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                </div> */}
            </form>
        </div >
    )
}

export default SignUpForm