
function Contacts() {
    return (
        <div
            className="side-content col-span-12 xl:col-span-3 -mt-16 xl:mt-0 pt-20 xl:-mr-6 px-6 xl:pt-6 side-content--active  flex-col overflow-hidden"
            data-content="contacts"
        >
            <div className="intro-y text-xl font-medium">Contacts</div>
            <div className="intro-y relative mt-5 mb-6">
                <input
                    type="text"
                    className="form-control box py-3 px-4 border-transparent pr-8"
                    placeholder="Search for contacts..."
                />
                <i
                    data-feather="search"
                    className="text-gray-600 w-5 h-5 absolute inset-y-0 right-0 my-auto mr-3"
                />
            </div>
            <div className="intro-y overflow-y-auto scrollbar-hidden -mx-5 px-5">
                <div className="user-list">
                    <div className="intro-x">
                        <div className="intro-x text-gray-500 mb-3">A</div>
                        <div className="intro-x block">
                            <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in ">
                                <div className="w-10 h-10 flex-none image-fit mr-1">
                                    <img
                                        alt="Topson Messenger Tailwind HTML Admin Template"
                                        className="rounded-full"
                                        src={'http://topson.left4code.com/dist/images/profile-9.jpg'}
                                    />
                                    <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <a href="javascript:;" className="font-medium">
                                        John Travolta
                                    </a>
                                    <div className="flex items-center text-xs mt-0.5">
                                        <div className="text-gray-600 dark:text-gray-500 truncate">
                                            Last seen 26 seconds ago ago
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                                    <a
                                        className="dropdown-toggle w-4 h-4"
                                        href="javascript:;"
                                        aria-expanded="false"
                                    >
                                        {" "}
                                        <i
                                            data-feather="more-vertical"
                                            className="w-4 h-4"
                                        />{" "}
                                    </a>
                                    <div className="dropdown-menu w-40">
                                        <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                                Share Contact
                                            </a>
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="copy" className="w-4 h-4 mr-2" />{" "}
                                                Copy Contact{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="intro-x block">
                            <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
                                <div className="w-10 h-10 flex-none image-fit mr-1">
                                    <img
                                        alt="Topson Messenger Tailwind HTML Admin Template"
                                        className="rounded-full"
                                        src={'http://topson.left4code.com/dist/images/profile-1.jpg'}
                                    />
                                    <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <a href="javascript:;" className="font-medium">
                                        Brad Pitt
                                    </a>
                                    <div className="flex items-center text-xs mt-0.5">
                                        <div className="text-gray-600 dark:text-gray-500 truncate">
                                            Last seen 59 seconds ago ago
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                                    <a
                                        className="dropdown-toggle w-4 h-4"
                                        href="javascript:;"
                                        aria-expanded="false"
                                    >
                                        {" "}
                                        <i
                                            data-feather="more-vertical"
                                            className="w-4 h-4"
                                        />{" "}
                                    </a>
                                    <div className="dropdown-menu w-40">
                                        <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                                Share Contact
                                            </a>
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="copy" className="w-4 h-4 mr-2" />{" "}
                                                Copy Contact{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="intro-x block">
                            <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
                                <div className="w-10 h-10 flex-none image-fit mr-1">
                                    <img
                                        alt="Topson Messenger Tailwind HTML Admin Template"
                                        className="rounded-full"
                                        src={'http://topson.left4code.com/dist/images/profile-7.jpg'}
                                    />
                                    <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <a href="javascript:;" className="font-medium">
                                        Leonardo DiCaprio
                                    </a>
                                    <div className="flex items-center text-xs mt-0.5">
                                        <div className="text-gray-600 dark:text-gray-500 truncate">
                                            Last seen 29 seconds ago ago
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                                    <a
                                        className="dropdown-toggle w-4 h-4"
                                        href="javascript:;"
                                        aria-expanded="false"
                                    >
                                        {" "}
                                        <i
                                            data-feather="more-vertical"
                                            className="w-4 h-4"
                                        />{" "}
                                    </a>
                                    <div className="dropdown-menu w-40">
                                        <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                                Share Contact
                                            </a>
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="copy" className="w-4 h-4 mr-2" />{" "}
                                                Copy Contact{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="intro-x text-gray-500 mt-6 mb-3">B</div>
                        <div className="intro-x block">
                            <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in ">
                                <div className="w-10 h-10 flex-none image-fit mr-1">
                                    <img
                                        alt="Topson Messenger Tailwind HTML Admin Template"
                                        className="rounded-full"
                                        src={'http://topson.left4code.com/dist/images/profile-9.jpg'}
                                    />
                                    <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <a href="javascript:;" className="font-medium">
                                        John Travolta
                                    </a>
                                    <div className="flex items-center text-xs mt-0.5">
                                        <div className="text-gray-600 dark:text-gray-500 truncate">
                                            Last seen 26 seconds ago ago
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                                    <a className="dropdown-toggle w-4 h-4" href="javascript:;">
                                        {" "}
                                        <i
                                            data-feather="more-vertical"
                                            className="w-4 h-4"
                                        />{" "}
                                    </a>
                                    <div className="dropdown-menu w-40">
                                        <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                                Share Contact
                                            </a>
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="copy" className="w-4 h-4 mr-2" />{" "}
                                                Copy Contact{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="intro-x block">
                            <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
                                <div className="w-10 h-10 flex-none image-fit mr-1">
                                    <img
                                        alt="Topson Messenger Tailwind HTML Admin Template"
                                        className="rounded-full"
                                        src={'http://topson.left4code.com/dist/images/profile-1.jpg'}
                                    />
                                    <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <a href="javascript:;" className="font-medium">
                                        Brad Pitt
                                    </a>
                                    <div className="flex items-center text-xs mt-0.5">
                                        <div className="text-gray-600 dark:text-gray-500 truncate">
                                            Last seen 59 seconds ago ago
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                                    <a className="dropdown-toggle w-4 h-4" href="javascript:;">
                                        {" "}
                                        <i
                                            data-feather="more-vertical"
                                            className="w-4 h-4"
                                        />{" "}
                                    </a>
                                    <div className="dropdown-menu w-40">
                                        <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                                Share Contact
                                            </a>
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="copy" className="w-4 h-4 mr-2" />{" "}
                                                Copy Contact{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="intro-x block">
                            <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
                                <div className="w-10 h-10 flex-none image-fit mr-1">
                                    <img
                                        alt="Topson Messenger Tailwind HTML Admin Template"
                                        className="rounded-full"
                                        src={'http://topson.left4code.com/dist/images/profile-7.jpg'}
                                    />
                                    <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <a href="javascript:;" className="font-medium">
                                        Leonardo DiCaprio
                                    </a>
                                    <div className="flex items-center text-xs mt-0.5">
                                        <div className="text-gray-600 dark:text-gray-500 truncate">
                                            Last seen 29 seconds ago ago
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                                    <a className="dropdown-toggle w-4 h-4" href="javascript:;">
                                        {" "}
                                        <i
                                            data-feather="more-vertical"
                                            className="w-4 h-4"
                                        />{" "}
                                    </a>
                                    <div className="dropdown-menu w-40">
                                        <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                                Share Contact
                                            </a>
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="copy" className="w-4 h-4 mr-2" />{" "}
                                                Copy Contact{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="intro-x block">
                            <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
                                <div className="w-10 h-10 flex-none image-fit mr-1">
                                    <img
                                        alt="Topson Messenger Tailwind HTML Admin Template"
                                        className="rounded-full"
                                        src={'http://topson.left4code.com/dist/images/profile-4.jpg'}
                                    />
                                    <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <a href="javascript:;" className="font-medium">
                                        Sylvester Stallone
                                    </a>
                                    <div className="flex items-center text-xs mt-0.5">
                                        <div className="text-gray-600 dark:text-gray-500 truncate">
                                            Last seen 42 minutes ago ago
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                                    <a className="dropdown-toggle w-4 h-4" href="javascript:;">
                                        {" "}
                                        <i
                                            data-feather="more-vertical"
                                            className="w-4 h-4"
                                        />{" "}
                                    </a>
                                    <div className="dropdown-menu w-40">
                                        <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                                Share Contact
                                            </a>
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="copy" className="w-4 h-4 mr-2" />{" "}
                                                Copy Contact{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="intro-x text-gray-500 mt-6 mb-3">C</div>
                        <div className="intro-x block">
                            <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in ">
                                <div className="w-10 h-10 flex-none image-fit mr-1">
                                    <img
                                        alt="Topson Messenger Tailwind HTML Admin Template"
                                        className="rounded-full"
                                        src={'http://topson.left4code.com/dist/images/profile-9.jpg'}
                                    />
                                    <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <a href="javascript:;" className="font-medium">
                                        John Travolta
                                    </a>
                                    <div className="flex items-center text-xs mt-0.5">
                                        <div className="text-gray-600 dark:text-gray-500 truncate">
                                            Last seen 26 seconds ago ago
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                                    <a className="dropdown-toggle w-4 h-4" href="javascript:;">
                                        {" "}
                                        <i
                                            data-feather="more-vertical"
                                            className="w-4 h-4"
                                        />{" "}
                                    </a>
                                    <div className="dropdown-menu w-40">
                                        <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                                Share Contact
                                            </a>
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="copy" className="w-4 h-4 mr-2" />{" "}
                                                Copy Contact{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="intro-x block">
                            <div className="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
                                <div className="w-10 h-10 flex-none image-fit mr-1">
                                    <img
                                        alt="Topson Messenger Tailwind HTML Admin Template"
                                        className="rounded-full"
                                        src={'http://topson.left4code.com/dist/images/profile-1.jpg'}
                                    />
                                    <div className="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                </div>
                                <div className="ml-2 overflow-hidden">
                                    <a href="javascript:;" className="font-medium">
                                        Brad Pitt
                                    </a>
                                    <div className="flex items-center text-xs mt-0.5">
                                        <div className="text-gray-600 dark:text-gray-500 truncate">
                                            Last seen 59 seconds ago ago
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                                    <a className="dropdown-toggle w-4 h-4" href="javascript:;">
                                        {" "}
                                        <i
                                            data-feather="more-vertical"
                                            className="w-4 h-4"
                                        />{" "}
                                    </a>
                                    <div className="dropdown-menu w-40">
                                        <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                                Share Contact
                                            </a>
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="copy" className="w-4 h-4 mr-2" />{" "}
                                                Copy Contact{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts