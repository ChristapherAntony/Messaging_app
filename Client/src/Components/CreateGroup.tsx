
function CreateGroup() {
  return (
    <div
    className="side-content col-span-12 xl:col-span-3 -mt-16 xl:mt-0 pt-20 xl:-mr-6 px-6 xl:pt-6 side-content--active flex-col overflow-hidden"
    data-content="groups"
>
    <div className="intro-y text-xl font-medium">Create Group</div>
    <div className="intro-y box p-2 mt-5 mb-6">
        <div
            className="boxed-tabs nav nav-tabs justify-center flex"
            role="tablist"
        >
            {" "}
            <a
                data-toggle="tab"
                data-target="#group-members"
                href="javascript:;"
                className="hover:bg-gray-100 dark:hover:bg-dark-2 flex-1 py-2 rounded-md text-center active"
                id="group-members-tab"
                role="tab"
                aria-controls="group-members"
                aria-selected="true"
            >
                Members
            </a>{" "}
            <a
                data-toggle="tab"
                data-target="#group-details"
                href="javascript:;"
                className="hover:bg-gray-100 dark:hover:bg-dark-2 flex-1 py-2 rounded-md text-center"
                id="group-details-tab"
                role="tab"
                aria-controls="group-details"
                aria-selected="false"
            >
                Details
            </a>{" "}
        </div>
    </div>
    <div className="intro-y overflow-y-auto scrollbar-hidden -mx-5 px-5">
        <div className="tab-content">
            <div
                className="tab-pane active"
                id="group-members"
                role="tabpanel"
                aria-labelledby="group-members-tab"
            >
                <div className="user-list">
                    <div className="intro-x pb-6">
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
                                    <div className="flex items-center text-xs">
                                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                                            Last seen 26 seconds ago ago
                                        </div>
                                    </div>
                                </div>
                                <input
                                    className="form-check-switch ml-auto"
                                    type="checkbox"
                                    id="user-list-a-0"
                                />
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
                                    <div className="flex items-center text-xs">
                                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                                            Last seen 59 seconds ago ago
                                        </div>
                                    </div>
                                </div>
                                <input
                                    className="form-check-switch ml-auto"
                                    type="checkbox"
                                    id="user-list-a-1"
                                />
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
                                    <div className="flex items-center text-xs">
                                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                                            Last seen 29 seconds ago ago
                                        </div>
                                    </div>
                                </div>
                                <input
                                    className="form-check-switch ml-auto"
                                    type="checkbox"
                                    id="user-list-a-2"
                                />
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
                                    <div className="flex items-center text-xs">
                                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                                            Last seen 26 seconds ago ago
                                        </div>
                                    </div>
                                </div>
                                <input
                                    className="form-check-switch ml-auto"
                                    type="checkbox"
                                    id="user-list-b-0"
                                />
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
                                    <div className="flex items-center text-xs">
                                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                                            Last seen 59 seconds ago ago
                                        </div>
                                    </div>
                                </div>
                                <input
                                    className="form-check-switch ml-auto"
                                    type="checkbox"
                                    id="user-list-b-1"
                                />
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
                                    <div className="flex items-center text-xs">
                                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                                            Last seen 29 seconds ago ago
                                        </div>
                                    </div>
                                </div>
                                <input
                                    className="form-check-switch ml-auto"
                                    type="checkbox"
                                    id="user-list-b-2"
                                />
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
                                    <div className="flex items-center text-xs">
                                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                                            Last seen 42 minutes ago ago
                                        </div>
                                    </div>
                                </div>
                                <input
                                    className="form-check-switch ml-auto"
                                    type="checkbox"
                                    id="user-list-b-3"
                                />
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
                                    <div className="flex items-center text-xs">
                                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                                            Last seen 26 seconds ago ago
                                        </div>
                                    </div>
                                </div>
                                <input
                                    className="form-check-switch ml-auto"
                                    type="checkbox"
                                    id="user-list-c-0"
                                />
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
                                    <div className="flex items-center text-xs">
                                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                                            Last seen 59 seconds ago ago
                                        </div>
                                    </div>
                                </div>
                                <input
                                    className="form-check-switch ml-auto"
                                    type="checkbox"
                                    id="user-list-c-1"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="user-list__action bg-theme-2 dark:bg-dark-6 -mx-5 px-5 pb-6">
                        <button className="btn btn-primary text-white w-full">
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="tab-pane"
                id="group-details"
                role="tabpanel"
                aria-labelledby="group-details-tab"
            >
                <div className="box p-4 mt-3 mb-6">
                    <div>
                        <label htmlFor="create-group-form-1" className="form-label">
                            Photo
                        </label>
                        <div className="image-upload border shadow-sm relative flex flex-col items-center justify-center rounded-md py-8 mt-3">
                            <div className="image-upload__icon w-12 h-12 rounded-full flex items-center justify-center">
                                <i data-feather="image" className="w-5 h-5" />
                            </div>
                            <div className="image-upload__info mt-2">
                                Choose your group profile photo
                            </div>
                            <input
                                type="file"
                                className="w-full h-full top-0 left-0 absolute opacity-0"
                                id="create-group-form-1"
                            />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="create-group-form-2" className="form-label">
                            Group Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="create-group-form-2"
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="create-group-form-3" className="form-label">
                            Tagline
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="create-group-form-3"
                        />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="create-group-form-4" className="form-label">
                            Public
                        </label>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-switch"
                                id="create-group-form-4"
                            />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="create-group-form-5" className="form-label">
                            Description
                        </label>
                        <textarea
                            className="form-control"
                            rows={5}
                            id="create-group-form-5"
                            defaultValue={""}
                        />
                    </div>
                    <button className="btn btn-primary w-full mt-3">
                        Create Group
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CreateGroup