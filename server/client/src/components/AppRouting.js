import React from 'react'
import { Routes, Route } from "react-router-dom";
import SignUp from '../pages/signUp/SignUp';
import SignUpFreelanceForm from '../pages/signUp/SignUpFreelanceForm'
import Home from '../pages/home/Home';
import LogIn from '../pages/logIn/LogIn';
import PrivateUserProfile from '../pages/privateUserProfile/PrivateUserProfile';
import PublicUserProfile from '../pages/publicUserProfile/PublicUserProfile';
import CategoryPage from '../pages/categoryPage/CategoryPage';

function AppRouting() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/log-in' element={<LogIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/sign-up-freelance' element={<SignUpFreelanceForm />} />
            <Route path='/my-profile/:username' element={<PrivateUserProfile />} />
            <Route path='/profile/:freelanceId' element={<PublicUserProfile />} />
            <Route path='/categories/children/:categoryId' element={<CategoryPage />} />
        </Routes>
    )
}

export default AppRouting