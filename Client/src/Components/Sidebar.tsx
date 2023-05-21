// import { Link } from "react-router-dom"
// import Chats from "./icons/Chats"
// import Contacts from "./icons/Contacts"
// import Groups from "./icons/Groups"
// import Profile from "./icons/Profile"
// import Settings from "./icons/Settings"


// function Sidebar(): JSX.Element {

//     return (

//         <div className="side-menu hidden md:block top-0 left-0 fixed w-16 h-screen">
//             <div className="side-menu__content box border-theme-3 dark:bg-dark-2 dark:border-dark-2 -intro-x border-r w-full h-full pt-16 flex flex-col justify-center overflow-hidden">
//                 {/* <Link
//                     className="-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative side-menu__content__link--active tooltip py-5"
//                     to="#"
//                     data-placement="right"
//                     title="Chats"
//                     data-content="chats"
//                 >
//                     {" "}
//                     <Chats/>
//                 </Link> */}
//                 <a
//                     className="-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative tooltip py-5"
//                     data-placement="right"
//                     title="Groups"
//                     data-content="groups"
//                 >
//                     {" "}
//                     <Groups/>
//                 </a>
//                 <a
//                     className="-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative tooltip py-5"

//                     data-placement="right"
//                     title="Contacts"
//                     data-content="contacts"
//                 >
//                     {" "}
//                     <Contacts/>
//                 </a>
//                 <a
//                     className="-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative tooltip py-5"
//                     href="javascript:;.html"
//                     data-placement="right"
//                     title="Profile"
//                     data-content="profile"
//                 >
//                     {" "}
//                     <Profile/>
//                 </a>
//                 <a
//                     className="-intro-x side-menu__content__link text-gray-600 dark:text-gray-300 relative tooltip py-5"
//                     href="settings.html"
//                     data-placement="right"
//                     title="Settings"
//                 >
//                     {" "}
//                     <Settings/>

//                 </a>
//             </div>
//         </div>

//     )
// }

// export default Sidebar



//////


import Chats from "./icons/Chats"
import Contacts from "./icons/Contacts"
import Groups from "./icons/Groups"
import Profile from "./icons/Profile"
import Settings from "./icons/Settings"
import { IconType } from "react-icons";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
type SidebarLinkProps = {
  icon: IconType;
  title: string;
  isActive?: boolean;
  onClick?: () => void;
};

function SidebarLink({
  icon: Icon,
  title,
  isActive = false,
  onClick,
}: SidebarLinkProps) {

  const handleClick = () => {
    onClick ? onClick() : console.log("No onClick function provided");
  };

  return (
    <div
      className={`-intro-x cursor-pointer side-menu__content__link text-gray-600 dark:text-gray-300 relative tooltip py-5 ${isActive ? "side-menu__content__link--active" : ""
        }`}
      data-placement="right"
      title={title}
      data-content={title.toLowerCase()}
      onClick={handleClick}

      style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Icon />
    </div>
  );
}



function Sidebar() {
  const [activeLink, setActiveLink] = useState("Chats");
  const navigate = useNavigate();
  const handleClick = (title: string) => {
    const path = title === 'Chats' ? '/' : title.toLowerCase()
    navigate(path)
    setActiveLink(title);
  };

  return (
    <div className="side-menu hidden md:block top-0 left-0 fixed w-16 h-screen">
      <div className="side-menu__content box border-theme-3 dark:bg-dark-2 dark:border-dark-2 -intro-x border-r w-full h-full pt-16 flex flex-col justify-center overflow-hidden">
        <SidebarLink
          icon={Chats}
          title="Chats"
          isActive={activeLink === "Chats"}
          onClick={() => handleClick("Chats")}
        />
        <SidebarLink
          icon={Groups}
          title="Groups"
          isActive={activeLink === "Groups"}
          onClick={() => handleClick("Groups")}
        />
        <SidebarLink
          icon={Contacts}
          title="Contacts"
          isActive={activeLink === "Contacts"}
          onClick={() => handleClick("Contacts")}
        />
        <SidebarLink
          icon={Profile}
          title="Profile"
          isActive={activeLink === "Profile"}
          onClick={() => handleClick("Profile")}
        />
        <SidebarLink
          icon={Settings}
          title="Settings"
          isActive={activeLink === "Settings"}
          onClick={() => handleClick("Settings")}
        />
      </div>
    </div>
  );
}

export default Sidebar;


