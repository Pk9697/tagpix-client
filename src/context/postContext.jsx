/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext } from 'react'
import { AuthContext } from './authContext'
import usePost from '../hooks/usePost'

const PostContext = createContext()

function PostContextProvider({ children }) {
  const {
    authState: { token },
  } = useContext(AuthContext)

  const { postState, createPost, assignLabel } = usePost(token)

  return (
    <PostContext.Provider value={{ postState, createPost, assignLabel }}>
      {children}
    </PostContext.Provider>
  )
}

export { PostContextProvider, PostContext }
