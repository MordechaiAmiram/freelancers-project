import React from 'react'
import './signUp.css'
function SignUpForm({ firstName, lastName, username, email, phone, password, handleChange, handleSubmitAsClient, handleSubmitAsFreelance }) {
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

                <label id='firstName' for="firstName">שם פרטי
                    <input
                        // id='firstname'
                        className='sign-up-input'
                        type="text"
                        name='firstName'
                        value={firstName}
                        onChange={handleChange}
                        placeholder="שם פרטי" />
                </label>

                <label id='lastName' for="lastName">שם משפחה
                    <input className='sign-up-input'
                        // id='lastname'
                        type="text"
                        name='lastName'
                        value={lastName}
                        onChange={handleChange}
                        placeholder="שם משפחה" />
                </label>

                <label for="username">שם משתמש
                    <input className='sign-up-input'
                        type="text"
                        name='username'
                        value={username}
                        onChange={handleChange}
                        placeholder="שם משתמש" />
                </label>

                <label for="phone">טלפון
                    <input className='sign-up-input'
                        type="text"
                        name='phone'
                        value={phone}
                        onChange={handleChange}
                        placeholder="טלפון" />
                </label>

                <label for="email">דואר אלקטרוני
                    <input className='sign-up-input'
                        type="text"
                        name='email'
                        value={email}
                        onChange={handleChange}
                        placeholder="מייל" />
                </label>

                <label for="password">סיסמה
                    <input className='sign-up-input'
                        type="password"
                        name='password'
                        value={password}
                        onChange={handleChange}
                        placeholder="סיסמה" />
                </label>

                <div className='submit-btns'>
                    <button className='sign-up-submit' onClick={handleSubmitAsClient}>הרשמה כלקוח</button>
                    <button className='sign-up-submit' onClick={handleSubmitAsFreelance}>הרשמה כפרילנס</button>
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