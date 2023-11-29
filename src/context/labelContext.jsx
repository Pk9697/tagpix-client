/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext } from 'react'
import { AuthContext } from './authContext'
import useLabel from '../hooks/useLabel'

const LabelContext = createContext()

function LabelContextProvider({ children }) {
  const {
    authState: { token },
  } = useContext(AuthContext)

  const { labelState } = useLabel(token)

  return (
    <LabelContext.Provider value={{ labelState }}>
      {children}
    </LabelContext.Provider>
  )
}

export { LabelContextProvider, LabelContext }
