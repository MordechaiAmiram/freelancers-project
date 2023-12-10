import React from 'react'
import './signUp.css'

function SignUpFreelanceForm() {
    return (
        <div>
            <form>
            
                <h3>הרשמה</h3>

                <label>מדינה
                    <input type="text"
                        placeholder="מדינה" />
                </label>

                <label>עיר
                    <input type="text"
                        placeholder="עיר" />
                </label>

                <label for="username">רחוב
                    <input type="text"
                        placeholder="רחוב" />
                </label>

                <label for="phone">מספר בנין
                    <input type="text"
                        placeholder="בנין" />
                </label>

                <label for="email">מספר דירה
                    <input type="text"
                        placeholder="דירה" />
                </label>

                <label for="password">מיקוד
                    <input type="password"
                        placeholder="מיקוד" />
                </label>
                <button>אישור</button>
            </form>
        </div>
    )
}

export default SignUpFreelanceForm