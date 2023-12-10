import React from 'react'
import './signUp.css'
function SignUpForm() {
    return (
        <div>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet" />

            <form>
                <h3>הרשמה</h3>

                {/* <InputField
            label={'Email or Phone'}
            sx={{ width: '100%' }} /> */}

                <label>שם פרטי 
                    <input
                        // style={{ width: '40%', display: 'inline-block', marginLeft: 10 }} for="firstname"
                        // id='firstname'
                        className='input'
                        type="text"
                        placeholder="שם פרטי" />
                </label>

                <label>שם משפחה
                    <input className='input'
                        // style={{ width: '40%', display: 'inline-block' }} for="lastname"
                        // id='lastnaem'
                        type="text"
                        placeholder="שם משפחה" />
                </label> 

                <label for="username">שם משתמש
                    <input className='input'
                        type="text"
                        placeholder="שם משתמש" />
                </label>

                <label for="phone">טלפון
                    <input className='input'
                        type="text"
                        placeholder="טלפון" />
                </label>

                <label for="email">דואר אלקטרוני
                    <input className='input'
                        type="text"
                        placeholder="מייל" />
                </label>

                <label for="password">סיסמה
                    <input className='input'
                        type="password"
                        placeholder="סיסמה" />
                </label>


                <button>אישור</button>
                <div className="social">
                    <div className="go"><i className="fab fa-google"></i>  Google</div>
                    <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
                </div>
            </form>
        </div >
    )
}

export default SignUpForm