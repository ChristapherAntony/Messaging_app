import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './auth'
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'

interface RequireAuthProps {
  children: React.ReactNode
}



export const RequireAuth = ({ children }: RequireAuthProps) => {
  const profile = useSelector((state: RootState) => state.userprofile)
  const location = useLocation()
  const auth = useAuth()

  if (!profile.userName) {
    return <Navigate to='/login' state={{ path: location.pathname }} />
  }

  return <>{children}</>
}
