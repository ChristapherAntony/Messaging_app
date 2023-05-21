import { useEffect, useRef, useState } from 'react'
import Bell from '../icons/Bell';

function Profile() {
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

        <div className="notification-dropdown dropdown relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="notification-dropdown__toggler focus:outline-none text-gray-600 border-theme-7 dark:border-dark-4 dark:text-gray-300 dropdown-toggle h-full flex items-center px-5 relative -mr-3 md:mr-0 md:border-l md:border-r"
            >
                <div className="relative">
                    <Bell />
                    <div className="w-2 h-2 bg-theme-1 text-white flex items-center justify-center absolute -mt-0.5 top-0 right-0 rounded-full"></div>
                </div>
            </button>
            {showDropdown && (
                <div id='dropdownNotification' className="z-20 absolute notification-dropdown__content right-0 top-0 ">
                    <div className="dropdown-menu__content box dark:bg-dark-2 px-4 pt-4 pb-5">
                        <div className="text-base font-medium leading-tight mb-4">
                            Notifications
                        </div>
                        <div className="cursor-pointer relative flex items-center ">
                            <div className="w-10 h-10 flex-none image-fit mr-1">
                                <img
                                    alt="Topson Messenger Tailwind HTML Admin Template"
                                    className="rounded-full"
                                    src={'http://topson.left4code.com/dist/images/profile-14.jpg'}
                                />
                                <div className="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                            </div>
                            <div className="ml-2 overflow-hidden">
                                <div className="flex items-center">
                                    <a href="javascript:;" className="font-medium truncate mr-5">
                                        Keanu Reeves
                                    </a>
                                    <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">
                                        05:09 AM
                                    </div>
                                </div>
                                <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">
                                    There are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some
                                    form, by injected humour, or randomi
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer relative flex items-center mt-6 ">
                            <div className="w-10 h-10 flex-none image-fit mr-1">
                                <img
                                    alt="Topson Messenger Tailwind HTML Admin Template"
                                    className="rounded-full"
                                    src={'http://topson.left4code.com/dist/images/profile-14.jpg'}
                                />
                                <div className="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                            </div>
                            <div className="ml-2 overflow-hidden">
                                <div className="flex items-center">
                                    <a href="javascript:;" className="font-medium truncate mr-5">
                                        Keanu Reeves
                                    </a>
                                    <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">
                                        05:09 AM
                                    </div>
                                </div>
                                <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">
                                    There are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some
                                    form, by injected humour, or randomi
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer relative flex items-center mt-6 ">
                            <div className="w-10 h-10 flex-none image-fit mr-1">
                                <img
                                    alt="Topson Messenger Tailwind HTML Admin Template"
                                    className="rounded-full"
                                    src={'http://topson.left4code.com/dist/images/profile-14.jpg'}
                                />
                                <div className="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                            </div>
                            <div className="ml-2 overflow-hidden">
                                <div className="flex items-center">
                                    <a href="javascript:;" className="font-medium truncate mr-5">
                                        Keanu Reeves
                                    </a>
                                    <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">
                                        05:09 AM
                                    </div>
                                </div>
                                <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">
                                    There are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some
                                    form, by injected humour, or randomi
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer relative flex items-center mt-6 ">
                            <div className="w-10 h-10 flex-none image-fit mr-1">
                                <img
                                    alt="Topson Messenger Tailwind HTML Admin Template"
                                    className="rounded-full"
                                    src={'http://topson.left4code.com/dist/images/profile-14.jpg'}
                                />
                                <div className="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                            </div>
                            <div className="ml-2 overflow-hidden">
                                <div className="flex items-center">
                                    <a href="javascript:;" className="font-medium truncate mr-5">
                                        Keanu Reeves
                                    </a>
                                    <div className="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">
                                        05:09 AM
                                    </div>
                                </div>
                                <div className="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">
                                    There are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some
                                    form, by injected humour, or randomi
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            )}

        </div>

    )
}

export default Profile

