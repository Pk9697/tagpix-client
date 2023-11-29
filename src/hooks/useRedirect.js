import { useLocation } from 'react-router-dom'

function useRedirect(isLoggedIn, isAdmin) {
  const location = useLocation()
  if (isLoggedIn) {
    if (isAdmin && location.state) {
      return location.state.data
    }
    if (isAdmin) return '/admin'
    return '/'
  }
  return null
}

export default useRedirect
