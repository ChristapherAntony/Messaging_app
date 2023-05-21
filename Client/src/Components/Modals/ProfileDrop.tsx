import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { resetUserProfile } from '../../Redux/userProfileReducer';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Redux/store';

function ProfileDrop() {
    const dispatch: AppDispatch = useDispatch()

    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(resetUserProfile());
        navigate('/')
    }
    return (
        <div id='dropdown' className=" absolute w-56 top-0 right-0 z-20 mt-16" >
            <div className="dropdown-menu__content box dark:bg-dark-2">
                <div className="p-2">
                    <Link
                        to={'settings'}
                        className="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"
                    >
                        <i data-feather="user" className="w-4 h-4 mr-2" /> Profile{" "}
                    </Link>
                    <Link
                        to={'construction'}
                        className="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"
                    >
                        <i data-feather="edit" className="w-4 h-4 mr-2" /> Add Account{" "}
                    </Link>
                    <Link
                        to={'construction'}
                        className="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"
                    >
                        <i data-feather="lock" className="w-4 h-4 mr-2" /> Reset
                        Password{" "}
                    </Link>
                    <Link
                        to={'construction'}
                        className="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"
                    >
                        <i data-feather="help-circle" className="w-4 h-4 mr-2" /> Help{" "}
                    </Link>
                </div>
                <div className="border-gray-200 dark:border-dark-4 p-2 border-t">
                    <button
                        onClick={handleLogout}
                        // to={'login'}
                        className="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"
                    >
                        <i data-feather="toggle-right" className="w-4 h-4 mr-2" />{" "}
                        Logout{" "}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProfileDrop