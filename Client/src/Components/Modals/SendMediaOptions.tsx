import React, { useState, useRef, useEffect } from 'react';
import Plus from '../icons/Plus';
import Envelope from '../icons/Envelope';
import Microphone from '../icons/Microphone';
import Camera from '../icons/Camera';

function SendMediaOptions() {
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
        <div className="dropdown relative" data-placement="top" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="text-gray-600 hover:text-theme-1 dropdown-toggle focus:outline-none"
            >
                {" "}
                <Plus />
                {" "}
            </button>

            {showDropdown && (
                <div id="dropdownAdd" className="chat-input__dropdown ">
                    <div className="dropdown-menu__content p-2">
                        <a
                            href="#"
                            className="shadow-md text-gray-600 bg-white rounded-full dark:text-gray-300 dark:bg-dark-3 hover:bg-theme-1 hover:text-white dark:hover:bg-theme-1 flex items-center block p-3 transition duration-300 rounded-md mb-2"
                        >
                            <Envelope />
                            {" "}
                        </a>
                        <a
                            href="#"
                            className="shadow-md text-gray-600 bg-white rounded-full dark:text-gray-300 dark:bg-dark-3 hover:bg-theme-1 hover:text-white dark:hover:bg-theme-1 flex items-center block p-3 transition duration-300 rounded-md mb-2"
                        >
                            <Microphone />
                            {" "}
                        </a>
                        <a
                            href="#"
                            className="shadow-md text-gray-600 bg-white rounded-full dark:text-gray-300 dark:bg-dark-3 hover:bg-theme-1 hover:text-white dark:hover:bg-theme-1 flex items-center block p-3 transition duration-300 rounded-md mb-2"
                        >
                            <Camera />
                            {" "}
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SendMediaOptions;
