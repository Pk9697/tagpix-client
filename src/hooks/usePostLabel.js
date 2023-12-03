/* eslint-disable no-use-before-define */
import { useEffect, useReducer } from 'react'
import postLabelReducer from '../reducers/postLabel'
import {
  fetchAllPosts,
  createPost,
  assignLabelToPost,
  updatePosts,
  removeLabelFromPost,
  deletePost,
} from '../actions/post'
import {
  createLabel,
  deleteCheckedLabels,
  deleteLabel,
  fetchAllLabels,
  filterPostsByLabel,
  selectAll,
  toggleCheckLabel,
} from '../actions/label'

const initialState = {
  posts: [],
  labels: [],
  inProgress: false,
  error: null,
}

function usePostLabel(token) {
  const [postLabelState, dispatch] = useReducer(postLabelReducer, initialState)

  useEffect(() => {
    if (token) {
      fetchAllPosts({ token, dispatch })
      fetchAllLabels({ token, dispatch })
    }
  }, [token])

  return {
    postLabelState,
    createPost: ({ ...args }) => createPost({ token, dispatch, ...args }),
    createLabel: ({ ...args }) => createLabel({ token, dispatch, ...args }),
    deleteLabel: ({ ...args }) => deleteLabel({ token, dispatch, ...args }),
    assignLabelToPost: ({ ...args }) =>
      assignLabelToPost({ token, dispatch, ...args }),
    updatePosts: ({ ...args }) => updatePosts({ dispatch, ...args }),
    fetchAllPosts: () => fetchAllPosts({ token, dispatch }),
    removeLabelFromPost: ({ ...args }) =>
      removeLabelFromPost({ token, dispatch, ...args }),
    filterPostsByLabel: ({ ...args }) =>
      filterPostsByLabel({ token, dispatch, ...args }),
    deletePost: ({ ...args }) => deletePost({ token, dispatch, ...args }),
    toggleCheckLabel: ({ ...args }) => toggleCheckLabel({ dispatch, ...args }),
    deleteCheckedLabels: ({ ...args }) =>
      deleteCheckedLabels({ token, dispatch, ...args }),
    selectAll: ({ ...args }) => selectAll({ dispatch, ...args }),
  }
}

export default usePostLabel
