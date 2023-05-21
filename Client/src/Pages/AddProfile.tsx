
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { changeUserProfile } from '../Redux/userProfileReducer'
import { AppDispatch, RootState } from '../Redux/store';
import OtpInput from 'reactjs-otp-input';
import axios from '../Utilities/axios';
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css';

import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';


import { REGISTER } from '../Utilities/Constants'
import { errorTost, successTost } from '../Components/Modals/tost'
import { OTP_VERIFY } from '../Utilities/Constants'
import { CgSpinner } from "react-icons/cg";
import { E164Number } from 'libphonenumber-js/core';

export const AddProfile = () => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const userData = location.state;


    const [phone, setPhone] = useState<E164Number | undefined>('');

    const [pw, setPw] = useState("");
    const [cpw, setCpw] = useState("");
    const [verificationSID, setVerificationSID] = useState('');

    const [enterOtp, setEnterOtp] = useState(false)
    const [remainingTime, setRemainingTime] = useState(60); // 60 seconds
    const [otp, setOtp] = useState('');
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()

    const profile = useSelector((state: RootState) => state.userprofile)

    
    const handleChange = (input: any) => {
        setOtp(input);
    };




    const sendOTP = (userData: unknown) => {
        setLoading(true);
        axios.post(REGISTER, userData).then((response) => {
            setVerificationSID(response.data.response.VerificationSID)
            setEnterOtp(true);
            setRemainingTime(60); // Reset the remaining time when sending OTP
            setLoading(false);
        }).catch((error) => {
            console.log(error);
            errorTost(error.response.data.message)
            setLoading(false);
        })
    }
    const verify = (body: unknown) => {
        setLoading(true);
        axios.post(OTP_VERIFY, body).then((response) => {
            console.log(response);
            const user = response.data.user
            const userName = user.profile_name
            const userEmail = user.email
            const userPhoto = user.profile_image
            const userPhone = user.phone_number
            dispatch(changeUserProfile({ userName, userEmail, userPhoto, userPhone }))
            setLoading(false);
            navigate('/')
        }).catch((error) => {
            console.log(error);
            errorTost(error.response.data.message)
            setLoading(false);
        })
    }

    const sendOtpHandle = () => {
        // Code for sending the OTP
        userData.phone_number = phone
        userData.password = pw
        userData.confirm_password = cpw
        if (!phone || !pw || !cpw) {
            return errorTost('please fill all fields',)
        }
        if (isValidPhoneNumber(userData.phone_number)) {
            sendOTP(userData);
        } else {
            errorTost('Phone number is invalid')
        }
    };
    const verifyOtpHandle = () => {
        const body = {
            VerificationSID: verificationSID,
            phone_number: phone,
            otp: otp
        }
        console.log(otp.length < 6);
        if (otp.length < 6) {
            errorTost('Invalid OTP')
            return
        }
        verify(body)
    }
    useEffect(() => {
        if (enterOtp) {
            const timer = setInterval(() => {
                setRemainingTime((prevTime) => prevTime - 1);
            }, 1000); // Update remaining time every second

            return () => {
                clearInterval(timer);
            };
        }
    }, [enterOtp]);
    useEffect(() => {
        if (remainingTime === 0) {
            setEnterOtp(false);
        }
    }, [remainingTime]);

    useEffect(() => {
        if (profile.userName && profile.userEmail && profile.userPhoto) {
            navigate('/');
        }
    }, [profile.userName, profile.userEmail, profile.userPhoto, navigate]);


    return (
        <div className="w-full min-h-screen  flex items-center justify-center">
            <div className="intro-y auth">
                <img onClick={() => navigate('/')}
                    className="intro-y mx-auto w-16 cursor-pointer"
                    alt="Topson Messenger Tailwind HTML Admin Template"
                    src={'https://res.cloudinary.com/dprxebwil/image/upload/v1684476419/Hello/5167580_dsmvww.png'}
                />
                <div className="intro-y text-gray-700 dark:text-gray-300 text-2xl font-medium text-center mt-2">
                    Update Profile
                </div>
                <div className="grid grid-cols-12 gap-6 mt-2">
                    <div className="intro-y col-span-12 ">
                        <div className="intro-y box p-4">

                            <div className="flex items-center space-x-4">
                                <img className="inline-block h-20 w-20 rounded-full ring-2 ring-white" src={userData.profile_image} alt="" />

                                <div className="font-medium dark:text-white">
                                    <div className='text-xl'>{userData.profile_name}</div>
                                    <div className="text-lg text-gray-500 dark:text-gray-400">
                                        {userData.email}
                                    </div>
                                </div>
                            </div>

                            {enterOtp ? (
                                <div className=' mt-5'>

                                    <div className="mt-3">
                                        <label htmlFor="setting-form-4" className="form-label">
                                            Phone
                                        </label>
                                        <input type="text" value={phone} className="form-control" id="setting-form-4" readOnly />
                                    </div>

                                    <label
                                        htmlFor="otp"
                                        className=" text-base text-white text-center"
                                    >
                                        Enter your OTP
                                    </label>
                                    <OtpInput
                                        value={otp}
                                        onChange={handleChange}
                                        numInputs={6}
                                        separator={<span>-</span>}
                                        className='text-black '
                                        inputStyle={{ width: '3.5rem', height: '2.5rem' }} // Optional: Adjust the size of each input box
                                    />
                                    <button onClick={verifyOtpHandle} className="btn btn-primary w-full mt-3">
                                        Verify OTP {loading && (<CgSpinner size={20} className="mt-1 animate-spin" />)}{remainingTime}</button>
                                </div>
                            ) : (
                                <>
                                    <div className="mt-3">
                                        <label htmlFor="setting-form-3" className="form-label">
                                            Phone
                                        </label>
                                        {/* <PhoneInput country={"in"} value={phone} onChange={setPhone} /> */}
                                        <PhoneInput
                                            defaultCountry="IN"
                                            defaultCountryCode="91"
                                            value={phone}
                                            limitMaxLength={true}
                                            maxLength={15}
                                            onChange={(value) => setPhone(value?.toString() ?? '')}
                                            className="bg-gray-800 text-black p-2 rounded-md"
                                        />

                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="setting-form-4" className="form-label">
                                            Password
                                        </label>
                                        <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} className="form-control" id="setting-form-4" />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="setting-form-4" className="form-label">
                                            Confirm
                                        </label>
                                        <input type="password" value={cpw} onChange={(e) => setCpw(e.target.value)} className="form-control" id="setting-form-5" />
                                    </div>
                                    <button onClick={sendOtpHandle} className="btn btn-primary w-full mt-3">
                                        Send OTP {loading && (<CgSpinner size={20} className="mt-1 animate-spin" />)}</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddProfile