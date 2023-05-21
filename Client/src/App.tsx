import Chats from './Components/Chats'
import Contacts from './Components/Contacts'
import CreateGroup from './Components/CreateGroup'
import Profile from './Components/Profile'
import Settings from './Components/Settings'
import Construction from './Pages/Construction'
import Dash from './Pages/Dash'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import NotFound from './Pages/NotFound'
import RegisterPage from './Pages/RegisterPage'

import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './Utilities/auth'
import { RequireAuth } from './Utilities/RequireAuth'
import AddProfile from './Pages/AddProfile'

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

        <Route path='/register/add-profile' element={<AddProfile />} />

        <Route path='/' element={<RequireAuth><HomePage /></RequireAuth>} >
          <Route element={<Dash />}>
            <Route index element={<Chats />} />
            <Route path='groups' element={<CreateGroup />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='profile' element={<Profile />} />
          </Route>

          <Route path='settings' element={<Settings />} />

        </Route>

        <Route path='/construction' element={<Construction />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AuthProvider>


  )
}

export default App
