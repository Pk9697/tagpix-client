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
    toggleCheckLabel,
    deleteCheckedLabels,
    selectAll,
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
        toggleCheckLabel,
        deleteCheckedLabels,
        selectAll,
      }}
    >
      {children}
    </PostLabelContext.Provider>
  )
}

export { PostLabelContextProvider, PostLabelContext }
