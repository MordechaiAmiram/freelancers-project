import React from 'react'
import { Routes, Route } from "react-router-dom";
import SignUp from '../pages/signUp/SignUp';
import SignUpFreelanceForm from '../pages/signUp/SignUpFreelanceForm'
import PrivateUserProfileForm from '../pages/PrivateUserProfile/PrivateUserProfileForm'
import PublicUserProfileForm from '../pages/publicUserProfile/PublicUserProfileForm'
import Home from '../pages/home/Home';
import LogIn from '../pages/logIn/LogIn';

function AppRouting() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='log-in' element={<LogIn />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route path='sign-up-freelance' element={<SignUpFreelanceForm />} />
            <Route path='private-profile/:username' element={<PrivateUserProfileForm />} />
            <Route path='profile/:username' element={<PublicUserProfileForm />} />
        </Routes>
    )
}

export default AppRouting