
function Profile() {
    return (
        <div
            className="side-content col-span-12 xl:col-span-3 -mt-16 xl:mt-0 pt-20 xl:-mr-6 px-6 xl:pt-6 side-content--active flex-col overflow-hidden"
            data-content="profile"
        >
            <div className="intro-y text-xl font-medium">Profile</div>
            <div className="intro-y box relative px-4 py-6 mt-5">
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
                <div className="border-gray-200 dark:border-dark-5 flex items-center border-b pb-3">
                    <div className="">
                        <div className="text-gray-600">Country</div>
                        <div className="capitalize mt-0.5">New York City, USA</div>
                    </div>
                    <i data-feather="globe" className="w-4 h-4 text-gray-600 ml-auto" />
                </div>
                <div className="border-gray-200 dark:border-dark-5 flex items-center border-b py-3">
                    <div className="">
                        <div className="text-gray-600">Phone</div>
                        <div className="mt-0.5">+32 19 23 62 24 34</div>
                    </div>
                    <i data-feather="mic" className="w-4 h-4 text-gray-600 ml-auto" />
                </div>
                <div className="border-gray-200 dark:border-dark-5 flex items-center border-b py-3">
                    <div className="">
                        <div className="text-gray-600">Gender</div>
                        <div className="capitalize mt-0.5">male</div>
                    </div>
                    <i data-feather="mail" className="w-4 h-4 text-gray-600 ml-auto" />
                </div>
                <div className="border-gray-200 dark:border-dark-5 flex items-center py-3">
                    <div className="">
                        <div className="text-gray-600">Email</div>
                        <div className="mt-0.5">johntravolta@left4code.com</div>
                    </div>
                    <i data-feather="mail" className="w-4 h-4 text-gray-600 ml-auto" />
                </div>
            </div>
            <div className="intro-y box p-4 mt-3">
                <div className="border-gray-200 dark:border-dark-5 flex items-center border-b pb-3">
                    <div className="">
                        <div className="text-gray-600">Twitter</div>
                        <a className="mt-0.5" href="">
                            @johntravolta
                        </a>
                    </div>
                    <i
                        data-feather="twitter"
                        className="w-4 h-4 text-gray-600 ml-auto"
                    />
                </div>
                <div className="border-gray-200 dark:border-dark-5 flex items-center border-b py-3">
                    <div className="">
                        <div className="text-gray-600">Facebook</div>
                        <a className="mt-0.5" href="">
                            johntravolta
                        </a>
                    </div>
                    <i
                        data-feather="facebook"
                        className="w-4 h-4 text-gray-600 ml-auto"
                    />
                </div>
                <div className="border-gray-200 dark:border-dark-5 flex items-center py-3">
                    <div className="">
                        <div className="text-gray-600">Instagram</div>
                        <a className="mt-0.5" href="">
                            @johntravolta
                        </a>
                    </div>
                    <i
                        data-feather="instagram"
                        className="w-4 h-4 text-gray-600 ml-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default Profile