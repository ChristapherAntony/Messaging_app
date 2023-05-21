import NavBar from '../Components/NavBar';
import Sidebar from '../Components/Sidebar';
import { Outlet } from 'react-router-dom'
function HomePage() {

    return (
        <div className='main'>
            <NavBar />
            <Sidebar />

            <Outlet/>
        </div>
    )
}

export default HomePage