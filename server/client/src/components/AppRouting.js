import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomeForm from '../pages/home/HomeForm'
import LogInForm from '../pages/logIn/LogInForm'
import SignUpForm from '../pages/signUp/SignUpForm';
import SignUpFreelanceForm from '../pages/signUp/SignUpFreelanceForm'
import PrivateUserProfileForm from '../pages/PrivateUserProfile/PrivateUserProfileForm'
import PublicUserProfileForm from '../pages/publicUserProfile/PublicUserProfileForm'

function AppRouting() {
    return (
        <Routes>
            <Route path='/' element={<HomeForm />} />
            <Route path='logIn' element={<LogInForm />} />
            <Route path='signUp' element={<SignUpForm />} />
            <Route path='signUpFreelance' element={<SignUpFreelanceForm />} />
            <Route path='private-profile/:username' element={<PrivateUserProfileForm />} />
            <Route path='profile/:username' element={<PublicUserProfileForm />} />
        </Routes>
    )
}

export default AppRouting