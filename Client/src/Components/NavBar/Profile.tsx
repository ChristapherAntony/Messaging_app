import  { useEffect, useRef, useState } from 'react'
import ProfileDrop from '../Modals/ProfileDrop'

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../Redux/store';

function Profile() {
    const profile = useSelector((state: RootState) => state.userprofile)
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [dropdownRef]);
    return (
        <div className="account-dropdown dropdown relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="h-full flex items-center pl-5 focus:outline-none"
            >
                <div className="w-8 h-8 image-fit">
                    <img
                        alt="Topson Messenger Tailwind HTML Admin Template"
                        className="rounded-full shadow-md"
                        src={profile.userPhoto}
                    />
                </div>
                <div className="hidden md:block ml-3">
                    <div className="w-28 truncate font-medium leading-tight">
                        {profile.userName}
                    </div>
                    <div className="account-dropdown__info text-xs text-gray-600">
                        {profile.userEmail}
                    </div>
                </div>
            </button>
            {showDropdown && (<ProfileDrop />
            )}

            {/* <ProfileDrop /> */}
        </div>
    )
}

export default Profile