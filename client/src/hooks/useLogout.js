import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../App'

export const useLogout = () => {
    const navigate = useNavigate();
    const { setCurrentUser } = useContext(userContext);

    const logout = () => {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('accessToken');
        setCurrentUser('');
        navigate('/');
    };

    return logout;
};
