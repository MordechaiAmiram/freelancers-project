import React from 'react'
import { Routes, Route } from "react-router-dom";
// import HomeForm from '../pages/home/HomeForm'
import LogInForm from '../pages/logIn/LogInForm'
import SignUp from '../pages/signUp/SignUp';
import SignUpFreelanceForm from '../pages/signUp/SignUpFreelanceForm'
import PrivateUserProfileForm from '../pages/PrivateUserProfile/PrivateUserProfileForm'
import PublicUserProfileForm from '../pages/publicUserProfile/PublicUserProfileForm'
import Home from '../pages/home/Home';

function AppRouting() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='log-in' element={<LogInForm />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route path='sign-up-freelance' element={<SignUpFreelanceForm />} />
            <Route path='private-profile/:username' element={<PrivateUserProfileForm />} />
            <Route path='profile/:username' element={<PublicUserProfileForm />} />
        </Routes>
    )
}

export default AppRouting