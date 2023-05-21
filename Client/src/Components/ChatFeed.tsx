import Emojis from './ChatFeed/Emojis'
import SendMediaOptions from './Modals/SendMediaOptions'
import Smile from './icons/Smile'
import Send from './icons/Send'

function ChatFeed() {
    return (
        <div className="chat-box border-theme-5 col-span-12 xl:col-span-6 flex flex-col overflow-hidden xl:border-l xl:border-r p-6">
            <div className="intro-y box border border-theme-3 dark:bg-dark-2 dark:border-dark-2 flex items-center px-5 py-4">
                <div className="flex items-center mr-auto">
                    <div className="w-12 h-12 flex-none image-fit mr-1">
                        <img
                            alt="Topson Messenger Tailwind HTML Admin Template"
                            className="rounded-full"
                            src={'http://topson.left4code.com/dist/images/profile-9.jpg'}
                        />
                        <div className="bg-green-500 w-3 h-3 absolute right-0 top-0 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="ml-2 overflow-hidden">
                        <a href="javascript:;" className="text-base font-medium">
                            John Travolta
                        </a>
                        <div className="text-gray-600">Online</div>
                    </div>
                </div>
                <a className="text-gray-600 hover:text-theme-1" href="">
                    {" "}
                    <i data-feather="camera" className="w-4 h-4 sm:w-6 sm:h-6" />{" "}
                </a>
                <a className="text-gray-600 hover:text-theme-1 ml-2 sm:ml-5" href="">
                    {" "}
                    <i data-feather="mic" className="w-4 h-4 sm:w-6 sm:h-6" />{" "}
                </a>
            </div>
            <div className="overflow-y-scroll scrollbar-hidden pt-5 flex-1">
                <div className="-intro-x chat-text-box flex items-end float-left mb-4">
                    <div className="chat-text-box__photo w-10 h-10 hidden sm:block flex-none image-fit relative mr-4">
                        <img
                            alt="Topson Messenger Tailwind HTML Admin Template"
                            className="rounded-full"
                            src={'http://topson.left4code.com/dist/images/profile-9.jpg'}
                        />
                    </div>
                    <div className="w-full">
                        <div>
                            <div className="chat-text-box__content flex items-center float-left">
                                <div className="box leading-relaxed dark:text-gray-300 text-gray-700 px-4 py-3 mt-3">
                                    Lorem ipsum sit{" "}
                                    <a className="text-theme-1" href="">
                                        @edwardnorton
                                    </a>{" "}
                                    amen dolor, lorem ipsum sit amen dolor{" "}
                                </div>
                                <div className="hidden sm:block dropdown relative ml-3 mt-3">
                                    <a href="javascript:;" className="dropdown-toggle w-4 h-4">
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
                                                <i
                                                    data-feather="corner-up-left"
                                                    className="w-4 h-4 mr-2"
                                                />{" "}
                                                Reply
                                            </a>
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="trash" className="w-4 h-4 mr-2" />{" "}
                                                Delete{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clear-both" />
                            <div className="chat-text-box__content flex items-center float-left">
                                <div className="box text-gray-700 dark:text-gray-300 flex flex-col sm:flex-row items-center mt-3 p-3">
                                    <div className="chat-text-box__content__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                            JPG
                                        </div>
                                    </div>
                                    <div className="sm:ml-3 mt-3 sm:mt-0 text-center sm:text-left">
                                        <div className="text-gray-700 dark:text-gray-300 whitespace-nowrap font-medium">
                                            preview-8.jpg
                                        </div>
                                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                                            1.2 MB Image File
                                        </div>
                                    </div>
                                    <div className="sm:ml-20 mt-3 sm:mt-0 flex">
                                        <a
                                            href="javascript:;"
                                            title="Download"
                                            className="tooltip w-8 h-8 block border rounded-full flex-none flex items-center justify-center sm:ml-2"
                                        >
                                            <i data-feather="download" className="w-4 h-4" />{" "}
                                        </a>
                                        <a
                                            href="javascript:;"
                                            title="Share"
                                            className="tooltip w-8 h-8 block border rounded-full flex-none flex items-center justify-center ml-2"
                                        >
                                            <i data-feather="share" className="w-4 h-4" />{" "}
                                        </a>
                                        <a
                                            href="javascript:;"
                                            title="Permission"
                                            className="tooltip w-8 h-8 block border rounded-full flex-none flex items-center justify-center ml-2"
                                        >
                                            <i data-feather="more-horizontal" className="w-4 h-4" />{" "}
                                        </a>
                                    </div>
                                </div>
                                <div className="hidden sm:block dropdown relative ml-3 mt-3">
                                    <a href="javascript:;" className="dropdown-toggle w-4 h-4">
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
                                                <i
                                                    data-feather="corner-up-left"
                                                    className="w-4 h-4 mr-2"
                                                />{" "}
                                                Reply
                                            </a>
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="trash" className="w-4 h-4 mr-2" />{" "}
                                                Delete{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clear-both mb-2" />
                        <div className="text-gray-600 text-xs">2 mins ago</div>
                    </div>
                </div>
                <div className="clear-both" />
                <div className="intro-x chat-text-box flex items-end float-right mb-4">
                    <div className="w-full">
                        <div>
                            <div className="chat-text-box__content flex items-center float-right">
                                <div className="hidden sm:block dropdown relative mr-3 mt-3">
                                    <a href="javascript:;" className="dropdown-toggle w-4 h-4">
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
                                                <i
                                                    data-feather="corner-up-left"
                                                    className="w-4 h-4 mr-2"
                                                />{" "}
                                                Reply
                                            </a>
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="trash" className="w-4 h-4 mr-2" />{" "}
                                                Delete{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="box leading-relaxed bg-theme-1 text-opacity-80 text-white px-4 py-3 mt-3">
                                    Lorem ipsum sit{" "}
                                    <a className="text-white" href="">
                                        @morganfreeman
                                    </a>{" "}
                                    amen dolor, lorem ipsum sit amen dolor{" "}
                                </div>
                            </div>
                            <div className="clear-both" />
                            <div className="chat-text-box__content flex items-center float-right">
                                <div className="hidden sm:block dropdown relative mr-3 mt-3">
                                    <a href="javascript:;" className="dropdown-toggle w-4 h-4">
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
                                                <i
                                                    data-feather="corner-up-left"
                                                    className="w-4 h-4 mr-2"
                                                />{" "}
                                                Reply
                                            </a>
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="trash" className="w-4 h-4 mr-2" />{" "}
                                                Delete{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-md text-gray-700 chat-text-box__content__text--image flex justify-end mt-3">
                                    <div
                                        className="tooltip w-16 h-16 image-fit zoom-in"
                                        title="preview-4.jpg"
                                    >
                                        <img
                                            alt="Topson Messenger Tailwind HTML Admin Template"
                                            className="rounded-md"
                                            src={'http://topson.left4code.com/dist/images/preview-4.jpg'}
                                        />
                                    </div>
                                    <div
                                        className="tooltip w-16 h-16 image-fit ml-2 zoom-in"
                                        title="preview-4.jpg"
                                    >
                                        <img
                                            alt="Topson Messenger Tailwind HTML Admin Template"
                                            className="rounded-md"
                                            src={'http://topson.left4code.com/dist/images/preview-14.jpg'}
                                        />
                                    </div>
                                    <div
                                        className="tooltip w-16 h-16 image-fit ml-2 zoom-in"
                                        title="preview-4.jpg"
                                    >
                                        <img
                                            alt="Topson Messenger Tailwind HTML Admin Template"
                                            className="rounded-md"
                                            src={'http://topson.left4code.com/dist/images/preview-12.jpg'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clear-both mb-2" />
                        <div className="text-gray-600 text-xs text-right">1 mins ago</div>
                    </div>
                    <div className="chat-text-box__photo w-10 h-10 hidden sm:block flex-none image-fit relative ml-4">
                        <img
                            alt="Topson Messenger Tailwind HTML Admin Template"
                            className="rounded-full"
                            src={'http://topson.left4code.com/dist/images/profile-1.jpg'}
                        />
                    </div>
                </div>
                <div className="clear-both" />
                <div className="intro-y text-gray-500 text-xs text-center mb-6 mt-5">
                    12 June 2020
                </div>
                <div className="-intro-x chat-text-box flex items-end float-left mb-4">
                    <div className="chat-text-box__photo w-10 h-10 hidden sm:block flex-none image-fit relative mr-4">
                        <img
                            alt="Topson Messenger Tailwind HTML Admin Template"
                            className="rounded-full"
                            src={'http://topson.left4code.com/dist/images/profile-9.jpg'}
                        />
                    </div>
                    <div className="w-full">
                        <div>
                            <div className="chat-text-box__content flex items-center float-left">
                                <div className="box leading-relaxed dark:text-gray-300 text-gray-700 px-4 py-3 mt-3">
                                    Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor{" "}
                                </div>
                                <div className="hidden sm:block dropdown relative ml-3 mt-3">
                                    <a href="javascript:;" className="dropdown-toggle w-4 h-4">
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
                                                <i
                                                    data-feather="corner-up-left"
                                                    className="w-4 h-4 mr-2"
                                                />{" "}
                                                Reply
                                            </a>
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="trash" className="w-4 h-4 mr-2" />{" "}
                                                Delete{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clear-both" />
                            <div className="chat-text-box__content flex items-center float-left">
                                <div className="rounded-md text-gray-700 chat-text-box__content__text--image flex justify-end mt-3">
                                    <div
                                        className="tooltip w-16 h-16 image-fit zoom-in"
                                        title="preview-4.jpg"
                                    >
                                        <img
                                            alt="Topson Messenger Tailwind HTML Admin Template"
                                            className="rounded-md"
                                            src={'http://topson.left4code.com/dist/images/preview-4.jpg'}
                                        />
                                    </div>
                                    <div
                                        className="tooltip w-16 h-16 image-fit ml-2 zoom-in"
                                        title="preview-12.jpg"
                                    >
                                        <img
                                            alt="Topson Messenger Tailwind HTML Admin Template"
                                            className="rounded-md"
                                            src={'http://topson.left4code.com/dist/images/preview-12.jpg'}
                                        />
                                    </div>
                                </div>
                                <div className="hidden sm:block dropdown relative ml-3 mt-3">
                                    <a href="javascript:;" className="dropdown-toggle w-4 h-4">
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
                                                <i
                                                    data-feather="corner-up-left"
                                                    className="w-4 h-4 mr-2"
                                                />{" "}
                                                Reply
                                            </a>
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="trash" className="w-4 h-4 mr-2" />{" "}
                                                Delete{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clear-both" />
                            <div className="chat-text-box__content flex items-center float-left">
                                <div className="box leading-relaxed dark:text-gray-300 text-gray-700 px-4 py-3 mt-3">
                                    Contrary to popular belief{" "}
                                </div>
                                <div className="hidden sm:block dropdown relative ml-3 mt-3">
                                    <a href="javascript:;" className="dropdown-toggle w-4 h-4">
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
                                                <i
                                                    data-feather="corner-up-left"
                                                    className="w-4 h-4 mr-2"
                                                />{" "}
                                                Reply
                                            </a>
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="trash" className="w-4 h-4 mr-2" />{" "}
                                                Delete{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clear-both mb-2" />
                        <div className="text-gray-600 text-xs">10 secs ago</div>
                    </div>
                </div>
                <div className="clear-both" />
                <div className="intro-x chat-text-box flex items-end float-right mb-4">
                    <div className="w-full">
                        <div>
                            <div className="chat-text-box__content flex items-center float-right">
                                <div className="hidden sm:block dropdown relative mr-3 mt-3">
                                    <a href="javascript:;" className="dropdown-toggle w-4 h-4">
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
                                                <i
                                                    data-feather="corner-up-left"
                                                    className="w-4 h-4 mr-2"
                                                />{" "}
                                                Reply
                                            </a>
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="trash" className="w-4 h-4 mr-2" />{" "}
                                                Delete{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="box leading-relaxed bg-theme-1 text-opacity-80 text-white px-4 py-3 mt-3">
                                    Lorem ipsum{" "}
                                </div>
                            </div>
                            <div className="clear-both" />
                            <div className="chat-text-box__content flex items-center float-right">
                                <div className="hidden sm:block dropdown relative mr-3 mt-3">
                                    <a href="javascript:;" className="dropdown-toggle w-4 h-4">
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
                                                <i
                                                    data-feather="corner-up-left"
                                                    className="w-4 h-4 mr-2"
                                                />{" "}
                                                Reply
                                            </a>
                                            <a
                                                href=""
                                                className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"
                                            >
                                                <i data-feather="trash" className="w-4 h-4 mr-2" />{" "}
                                                Delete{" "}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="box leading-relaxed text-gray-700 dark:text-gray-300 flex flex-col sm:flex-row items-center mt-3 p-3">
                                    <div className="chat-text-box__content__icon text-white w-12 flex-none bg-contain relative bg-no-repeat bg-center block">
                                        <div className="absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                            PNG
                                        </div>
                                    </div>
                                    <div className="sm:ml-3 mt-3 sm:mt-0 text-center sm:text-left">
                                        <div className="text-gray-700 dark:text-gray-300 whitespace-nowrap font-medium">
                                            preview-10.jpg
                                        </div>
                                        <div className="text-gray-600 whitespace-nowrap text-xs mt-0.5">
                                            1.4 MB Image File
                                        </div>
                                    </div>
                                    <div className="sm:ml-20 mt-3 sm:mt-0 flex">
                                        <a
                                            href="javascript:;"
                                            title="Download"
                                            className="tooltip w-8 h-8 block border rounded-full flex-none flex items-center justify-center ml-2"
                                        >
                                            <i data-feather="download" className="w-4 h-4" />{" "}
                                        </a>
                                        <a
                                            href="javascript:;"
                                            title="Share"
                                            className="tooltip w-8 h-8 block border rounded-full flex-none flex items-center justify-center ml-2"
                                        >
                                            <i data-feather="share" className="w-4 h-4" />{" "}
                                        </a>
                                        <a
                                            href="javascript:;"
                                            title="Permission"
                                            className="tooltip w-8 h-8 block border rounded-full flex-none flex items-center justify-center ml-2"
                                        >
                                            <i data-feather="more-horizontal" className="w-4 h-4" />{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clear-both mb-2" />
                        <div className="text-gray-600 text-xs text-right">1 secs ago</div>
                    </div>
                    <div className="chat-text-box__photo w-10 h-10 hidden sm:block flex-none image-fit relative ml-4">
                        <img
                            alt="Topson Messenger Tailwind HTML Admin Template"
                            className="rounded-full"
                            src={'http://topson.left4code.com/dist/images/profile-1.jpg'}
                        />
                    </div>
                </div>
                <div className="clear-both" />
                <div className="-intro-x chat-text-box flex items-end float-left mb-4">
                    <div className="w-10 h-10 hidden sm:block flex-none image-fit relative mr-5">
                        <img
                            alt="Topson Messenger Tailwind HTML Admin Template"
                            className="rounded-full"
                            src={'http://topson.left4code.com/dist/images/profile-9.jpg'}
                        />
                    </div>
                    <div className="w-full">
                        <div>
                            <div className="chat-text-box__content flex items-center float-left">
                                <div className="box leading-relaxed dark:text-gray-300 text-gray-700 px-4 py-3 mt-3">
                                    John Travolta is typing
                                    <span className="typing-dots ml-1">
                                        {" "}
                                        <span>.</span> <span>.</span> <span>.</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro-y chat-input box border-theme-3 dark:bg-dark-2 dark:border-dark-2 border flex items-center px-5 py-4">
                <SendMediaOptions />

                <textarea
                    className="form-control h-12 shadow-none resize-none border-transparent px-5 py-3 focus:shadow-none truncate mr-3 sm:mr-0"
                    rows={1}
                    placeholder="Type your message..."
                    defaultValue={""}
                />
                <div
                    className="dropdown relative mr-3 sm:mr-5"
                    data-placement="top-end"
                >
                    <a
                       
                        className="text-gray-600 hover:text-theme-1 dropdown-toggle w-4 h-4 sm:w-5 sm:h-5 block"
                    >
                        {" "}
                        <Smile/>
                        {" "}
                    </a>

                    <Emojis />
                </div>
                <a
                    href="javascript:;"
                    className="bg-theme-1 text-white w-8 h-8 sm:w-10 sm:h-10 block rounded-full flex-none flex items-center justify-center"
                >
                    {" "}
                   <Send/>

                    {" "}
                </a>
            </div>
        </div>
    )
}

export default ChatFeed