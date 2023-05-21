import { useState, useEffect } from 'react'
import { useNavigate, useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../Utilities/auth'
import { useDispatch, useSelector } from 'react-redux'
import { changeUserProfile } from '../Redux/userProfileReducer'
import { AppDispatch, RootState } from '../Redux/store';
import GoogleAuth from '../Components/GoogleAuth'
import { errorTost, successTost } from '../Components/Modals/tost'
import axios from '../Utilities/axios';
import { LOGIN } from '../Utilities/Constants'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export const LoginPage = () => {



    const dispatch: AppDispatch = useDispatch()
    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate()
    const location = useLocation()
    const auth = useAuth()
    const [phone, setPhone] = useState('');

    const profile = useSelector((state: RootState) => state.userprofile)
    const redirectPath = (location.state as { path?: string })?.path || '/'

    const login = (body: any) => {
        axios.post(LOGIN, body).then((response) => {
            
            const user = response.data
            console.log(user);
            const userName = user.profile_name
            const userEmail = user.email
            const userPhoto = user.profile_image
            const userPhone = user.phone_number
            dispatch(changeUserProfile({ userName, userEmail, userPhoto, userPhone }))
            navigate(redirectPath, { replace: true })
        }).catch((error) => {
            console.log(error);
            errorTost(error.response.data.message)
        })
    }


    const handleLogin = () => {
        if (!user || !password) return errorTost('Enter both fields')
        if (!isValidPhoneNumber(user)) return errorTost('Phone number is invalid')
        const body = {
            phone_number:  user,
            password: password
        }
        login(body)
    }
    useEffect(() => {
        if (profile.userName && profile.userEmail && profile.userPhoto) {
            navigate('/')
        }

        return
    }, [])
    return (
        <div className="w-full min-h-screen p-5 md:p-20 flex items-center justify-center">
            <div className="intro-y auth">
                <img onClick={() => navigate('/')}
                    className="intro-y mx-auto w-16 cursor-pointer"
                    alt="Topson Messenger Tailwind HTML Admin Template"
                    // src={'http://topson.left4code.com/dist/images/logo.svg'}
                    src={'https://res.cloudinary.com/dprxebwil/image/upload/v1684476419/Hello/5167580_dsmvww.png'}
                />
                <div className="intro-y text-gray-700 dark:text-gray-300 text-2xl font-medium text-center mt-10">
                    Login to Your Account!
                </div>
                <div className="intro-y box px-5 py-8 mt-8">
                    <div className="intro-y">
                        {/* <input
                            type="text"
                            onChange={e => setUser(e.target.value)}
                            className="form-control py-3 px-4 auth__input intro-y"
                            placeholder="Phone number"
                        /> */}
                        <PhoneInput
                            defaultCountry="IN"
                            defaultCountryCode="91"
                            value={phone}
                            limitMaxLength={true}
                            maxLength={15}
                            placeholder="Enter your phone number"

                            onChange={(value) => setUser(value?.toString() ?? '')}
                            className="bg-gray-800 text-black p-2 rounded-md"
                        />
                        <input
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            className="form-control py-3 px-4 auth__input intro-y mt-4"
                            placeholder="Password"
                        />
                    </div>
                    <div className="intro-y text-gray-600 dark:text-gray-300 flex text-xs sm:text-sm mt-4">
                        <div className="flex items-center mr-auto">
                            <input
                                type="checkbox"
                                className="form-check-input border mr-2"
                                id="remember-me"
                            />
                            <label className="cursor-pointer select-none" htmlFor="remember-me">
                                Remember me
                            </label>
                        </div>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div className="intro-y mt-5 xl:mt-8 text-center xl:text-left">
                        <button
                            onClick={handleLogin}
                            className="btn btn-primary intro-y w-full xl:mr-3">
                            Login
                        </button>
                        <button onClick={() => navigate('/register')} className="btn btn-outline-secondary intro-y w-full mt-3">
                            Sign up
                        </button>
                        <br />
                        <br />
                        <GoogleAuth />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginPage