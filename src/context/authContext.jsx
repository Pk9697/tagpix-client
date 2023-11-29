/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext } from 'react'
import useAuth from '../hooks/useAuth'

const AuthContext = createContext()

function AuthContextProvider({ children }) {
  const { authState, loginUser, logOutUser, registerUser } = useAuth()

  return (
    <AuthContext.Provider
      value={{ authState, loginUser, logOutUser, registerUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider, AuthContext }
