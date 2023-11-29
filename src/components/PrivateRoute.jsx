import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

function PrivateRoute({ children }) {
  const location = useLocation()
  const {
    authState: { isLoggedIn },
  } = useContext(AuthContext)
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ data: location.pathname }} />
  )
}

export default PrivateRoute
