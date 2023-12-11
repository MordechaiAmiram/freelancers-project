import React from 'react'
import './signUp.css'
function SignUpForm() {
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

                <label id='firstname' for="firstname">שם פרטי
                    <input
                        // id='firstname'
                        className='sign-up-input'
                        type="text"
                        name='firstname'
                        placeholder="שם פרטי" />
                </label>

                <label id='lastname' for="lastname">שם משפחה
                    <input className='sign-up-input'
                        // id='lastname'
                        type="text"
                        name='lastname'
                        placeholder="שם משפחה" />
                </label>

                <label for="username">שם משתמש
                    <input className='sign-up-input'
                        type="text"
                        name='username'
                        placeholder="שם משתמש" />
                </label>

                <label for="phone">טלפון
                    <input className='sign-up-input'
                        type="text"
                        name='phone'
                        placeholder="טלפון" />
                </label>

                <label for="email">דואר אלקטרוני
                    <input className='sign-up-input'
                        type="text"
                        name='email'
                        placeholder="מייל" />
                </label>

                <label for="password">סיסמה
                    <input className='sign-up-input'
                        type="password"
                        name='password'
                        placeholder="סיסמה" />
                </label>


                <button className='sign-up-submit'>אישור</button>
                <div className="social">
                    <div className="go"><i className="fab fa-google"></i>  Google</div>
                    <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                </div>
            </form>
        </div >
    )
}

export default SignUpForm