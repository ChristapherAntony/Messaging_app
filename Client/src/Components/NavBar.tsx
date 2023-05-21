
import { useState, useEffect } from 'react';
import InviteFriends from './Modals/InviteFriends';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Profile from './NavBar/Profile';
import Notifications from './NavBar/Notifications';
function NavBar() {
    const [isChecked, setIsChecked] = useState(localStorage.getItem('theme') === 'dark' ? true : false);
    const navigate = useNavigate()


    useEffect(() => {
        console.log('state chnages', isChecked)
        console.log(localStorage.getItem('theme'))
        const theme = isChecked ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
        console.log(localStorage.getItem('theme'))
    }, [isChecked]);

    return (
        <>
            <div className="top-bar top-0 left-0 fixed w-full h-16">
                <div className="-intro-y top-bar__content bg-white border-theme-3 dark:bg-dark-2 dark:border-dark-2 border-b w-full h-full flex px-5">
                    <Link className="hidden md:flex items-center h-full mr-auto"
                        to={'/'}
                    >
                        <img
                            alt="Topson Messenger Tailwind HTML Admin Template"
                            className="h-8"
                            // src={'http://topson.left4code.com/dist/images/logo.svg'}
                            src={'https://res.cloudinary.com/dprxebwil/image/upload/v1684476419/Hello/5167580_dsmvww.png'}
                        />
                        <div className="text-base font-light ml-4">
                            {" "}
                            <span className="font-medium">Hello</span> Messenger{" "}
                        </div>
                    </Link>
                    <a
                        className="mobile-menu-toggler flex md:hidden items-center h-full mr-auto px-5 -ml-5"
                        href="javascript:;"
                    >
                        {" "}
                        <i
                            data-feather="bar-chart-2"
                            className="w-5 h-5 transform rotate-90"
                        />{" "}
                    </a>
                    <div className="h-full flex items-center">
                        <div className="mr-3">Dark Mode</div>
                        <input
                            className="form-check-switch"
                            type="checkbox"
                            id="dark-mode-switcher"
                            onChange={() => setIsChecked(!isChecked)}
                            checked={isChecked}
                        />
                    </div>
                    <div className="hidden md:flex items-center px-5">
                        {" "}
                        <a

                            data-toggle="modal"
                            data-target="#invite-friends-modal"
                            className="btn btn-primary"
                        >
                            Invite Friends
                        </a>{" "}
                    </div>

                   <Notifications/>




                    <Profile />


                </div>
            </div>
            <InviteFriends />
        </>
    )
}

export default NavBar