import  { useState } from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../Redux/store';
import { useDispatch } from 'react-redux';
import { changeUserProfile } from '../Redux/userProfileReducer';
import axios from '../Utilities/axios';
import { GOOGLE_AUTH } from '../Utilities/Constants';
import { errorTost } from './Modals/tost';


function GoogleAuth() {
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState<string | null>(null);
    const dispatch: AppDispatch = useDispatch()
    const clientId = import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID;


    const redirectPath = (location.state as { path?: string })?.path || '/'


    const handleLoginSuccess = async (response: any) => {
        const token = response.credential;
        //send token to server
        axios.get(GOOGLE_AUTH(token)).then((response) => {
            const user = response.data.data
            if (response.status === 200) {
                //if user exists response is jwt with credentials we need to dispatch and navigate to home
                const userName = user.profile_name
                const userEmail = user.email
                const userPhoto = user.profile_image
                const userPhone = user.phone_number
                dispatch(changeUserProfile({ userName, userEmail, userPhoto, userPhone }))
                navigate(redirectPath, { replace: true })
            } else if (response.status === 202) {
                //else, navigate to addProfile page with data received in search params
                navigate('/register/add-profile', { state: user })
            }

        }).catch((error) => {
            console.log(error);
            errorTost('Google auth failed !')
        })
    };

    const handleLoginFailure = () => {
        console.log('Login failed');
        setError('Failed to log in');
    };

    return (
        // className='flex items-center justify-center '
        <div className='flex items-center justify-center '>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginFailure}
                    useOneTap
                    text="continue_with"
                    size='large'
                    // width='300'
                />
            </GoogleOAuthProvider>
            {error && (
                <div>
                    {error}
                </div>
            )}
        </div>
    );
}

export default GoogleAuth;
