/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext } from 'react'
import { AuthContext } from './authContext'
import usePostLabel from '../hooks/usePostLabel'

const PostLabelContext = createContext()

function PostLabelContextProvider({ children }) {
  const {
    authState: { token },
  } = useContext(AuthContext)

  const {
    postLabelState,
    createPost,
    createLabel,
    deleteLabel,
    assignLabelToPost,
    updatePosts,
    fetchAllPosts,
    removeLabelFromPost,
    filterPostsByLabel,
    deletePost,
  } = usePostLabel(token)

  return (
    <PostLabelContext.Provider
      value={{
        postLabelState,
        createPost,
        createLabel,
        deleteLabel,
        assignLabelToPost,
        updatePosts,
        fetchAllPosts,
        removeLabelFromPost,
        filterPostsByLabel,
        deletePost,
      }}
    >
      {children}
    </PostLabelContext.Provider>
  )
}

export { PostLabelContextProvider, PostLabelContext }
