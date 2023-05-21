import React from 'react'
import { useNavigate } from 'react-router-dom'
import GoogleAuth from '../Components/GoogleAuth';


function RegisterPage() {
    const navigate = useNavigate();
    return (
        <div className="w-full min-h-screen p-5 md:p-20 flex items-center justify-center">
            <div className="intro-y auth">
                <img
                    onClick={() => navigate('/')}
                    className="intro-y mx-auto w-16 cursor-pointer"
                    alt="Topson Messenger Tailwind HTML Admin Template"
                    src={'https://res.cloudinary.com/dprxebwil/image/upload/v1684476419/Hello/5167580_dsmvww.png'}
                />
                <div className="intro-y text-gray-700 dark:text-gray-300 text-2xl font-medium text-center mt-16">
                    Register New Account
                </div>
                <div className="intro-y box px-5 py-8 mt-8">
                    {/* <div className="intro-y">
                        <input
                            type="text"
                            className="form-control py-3 px-4 intro-y auth__input"
                            placeholder="First Name"
                        />
                       
                        <input
                            type="text"
                            className="form-control py-3 px-4 intro-y auth__input mt-4"
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            className="form-control py-3 px-4 intro-y auth__input mt-4"
                            placeholder="Password"
                        />
                        <div className="intro-y w-full grid grid-cols-12 gap-4 h-1 mt-3">
                            <div className="col-span-3 h-full rounded bg-green-500" />
                            <div className="col-span-3 h-full rounded bg-green-500" />
                            <div className="col-span-3 h-full rounded bg-green-500" />
                            <div className="col-span-3 h-full rounded bg-gray-200 dark:bg-dark-2" />
                        </div>
                        <a
                            href="http://topson.left4code.com/register.html"
                            className="intro-y text-gray-600 dark:text-gray-300 block mt-2 text-xs sm:text-sm -mb-1"
                        >
                            What is a secure password?
                        </a>
                        <input
                            type="password"
                            className="form-control py-3 px-4 intro-y mt-4"
                            placeholder="Password Confirmation"
                        />
                    </div>
                    <div className="intro-x flex items-center text-gray-700 dark:text-gray-600 mt-4 text-xs sm:text-sm">
                        <input
                            type="checkbox"
                            className="form-check-input border mr-2"
                            id="remember-me"
                        />
                        <label className="cursor-pointer select-none" htmlFor="remember-me">
                            I agree to the Envato
                        </label>
                        <a
                            className="text-theme-1 dark:text-theme-10 ml-1"
                            href="http://topson.left4code.com/register.html"
                        >
                            Privacy Policy
                        </a>
                        .
                    </div>
                    <div className="intro-y mt-5 xl:mt-8 text-center xl:text-left">
                        <button className="btn btn-primary intro-y w-full xl:mr-3">
                            Register
                        </button>
                        <button onClick={()=>navigate('/login')} className="btn btn-outline-secondary intro-y w-full mt-3">
                            Sign in
                        </button>

                    </div> */}

                    <GoogleAuth />
                    <br /><br />
                    <button onClick={() => navigate('/login')} className="btn btn-outline-secondary intro-y w-full mt-3">
                       Back to Sign in
                    </button>
                    

                </div>
                <div className="intro-y leading-relaxed text-gray-600 dark:text-gray-300 mt-10 text-center xl:text-center">
                    By signin up, you agree to our
                    <br />
                    <a className="underline" href="#">
                        Terms and Conditions
                    </a>{" "}
                    &amp;{" "}
                    <a className="underline" href="#">
                        Privacy Policy
                    </a>
                </div>
            </div>
        </div>

    )
}

export default RegisterPage