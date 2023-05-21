
function ChatProfile() {
  return (
    <div className="info-content col-span-12 xl:col-span-3 flex flex-col overflow-hidden pl-6 xl:pl-0 pr-6">
    <div className="overflow-y-auto scrollbar-hidden py-6">
        <div className="intro-y box relative px-4 py-6">
            <a
                href="javascript:;"
                title="Settings"
                className="text-gray-600 tooltip w-8 h-8 block flex items-center justify-center absolute top-0 right-0 mr-1 mt-1"
            >
                <i data-feather="edit-2" className="w-4 h-4" />{" "}
            </a>
            <div className="w-20 h-20 mx-auto image-fit">
                <img
                    alt="Topson Messenger Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={'http://topson.left4code.com/dist/images/profile-9.jpg'}
                />
                <div className="bg-green-500 border-white w-3 h-3 absolute right-0 top-0 mt-1 mr-1 rounded-full border-2"></div>
            </div>
            <div className="text-base font-medium text-center mt-3">
                John Travolta
            </div>
            <div className="text-gray-600 text-center text-xs uppercase mt-0.5">
                Software Engineer
            </div>
        </div>
        <div className="intro-y box p-4 mt-3">
            <div className="text-base font-medium">Personal Information</div>
            <div className="mt-4">
                <div className="border-gray-200 dark:border-dark-5 flex items-center border-b pb-3">
                    <div className="">
                        <div className="text-gray-600">Country</div>
                        <div className="mt-0.5">New York City, USA</div>
                    </div>
                    <i
                        data-feather="globe"
                        className="w-4 h-4 text-gray-600 ml-auto"
                    />
                </div>
                <div className="border-gray-200 dark:border-dark-5 flex items-center border-b py-3">
                    <div className="">
                        <div className="text-gray-600">Phone</div>
                        <div className="mt-0.5">+32 19 23 62 24 34</div>
                    </div>
                    <i
                        data-feather="mic"
                        className="w-4 h-4 text-gray-600 ml-auto"
                    />
                </div>
                <div className="border-gray-200 dark:border-dark-5 flex items-center py-3">
                    <div className="">
                        <div className="text-gray-600">Email</div>
                        <div className="mt-0.5">johntravolta@left4code.com</div>
                    </div>
                    <i
                        data-feather="mail"
                        className="w-4 h-4 text-gray-600 ml-auto"
                    />
                </div>
            </div>
        </div>
        <div className="intro-y h-full box flex flex-col p-4 mt-3">
            <div className="text-base font-medium">Shared Files</div>
            <div className="mt-4 overflow-x-hidden overflow-y-auto scrollbar-hidden">
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative ">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            JPG
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            preview-8.jpg
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            1.2 MB Image File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            MP4
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            Celine Dion - Ashes.mp4
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            20 MB Audio File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            PDF
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            Laravel 7
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            120 MB Document File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            ZIP
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            Repository
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            20 KB Zipped File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            JPG
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            preview-3.jpg
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            1.2 MB Image File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            JPG
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            preview-10.jpg
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            1.2 MB Image File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            JPG
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            preview-11.jpg
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            1.2 MB Image File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            JPG
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            preview-6.jpg
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            1 MB Image File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            TXT
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            Resources.txt
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            2.2 MB Text File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            PDF
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            Documentation
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            4 MB Document File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            MP4
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            Celine Dion - Ashes.mp4
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            20 MB Audio File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            PDF
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            Documentation
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            4 MB Document File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            TXT
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            Resources.txt
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            2.2 MB Text File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            JPG
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            preview-11.jpg
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            1.2 MB Image File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            PDF
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            Laravel 7
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            120 MB Document File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            JPG
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            preview-13.jpg
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            1.2 MB Image File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            JPG
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            preview-8.jpg
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            1.2 MB Image File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            JPG
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            preview-5.jpg
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            1 MB Image File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            PHP
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            Routes.php
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            1 KB Script File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shared-file border-gray-200 dark:border-dark-5 flex items-center p-3 border rounded-md relative mt-3">
                    <div className="shared-file__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            PHP
                        </div>
                    </div>
                    <div className="w-full ml-3">
                        <div className="text-gray-700 dark:text-gray-300 w-4/5 whitespace-nowrap font-medium truncate">
                            Routes.php
                        </div>
                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                            1 KB Script File
                        </div>
                    </div>
                    <div className="dropdown absolute flex items-center top-0 bottom-0 right-0 mr-4 ml-auto">
                        <a
                            className="dropdown-toggle w-4 h-4"
                            href="javascript:;"
                            aria-expanded="false"
                        >
                            {" "}
                            <i data-feather="more-vertical" className="w-4 h-4" />{" "}
                        </a>
                        <div className="dropdown-menu w-40">
                            <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="share-2" className="w-4 h-4 mr-2" />{" "}
                                    Share{" "}
                                </a>
                                <a
                                    href=""
                                    className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                >
                                    <i data-feather="download" className="w-4 h-4 mr-2" />{" "}
                                    Download{" "}
                                </a>
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

export default ChatProfile