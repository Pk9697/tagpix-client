/* eslint-disable no-use-before-define */
import { useEffect, useReducer } from 'react'
import postLabelReducer from '../reducers/postLabel'
import {
  fetchAllPosts,
  createPost,
  assignLabelToPost,
  updatePosts,
  removeLabelFromPost,
} from '../actions/post'
import {
  createLabel,
  deleteLabel,
  fetchAllLabels,
  filterPostsByLabel,
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
  }
}

export default usePostLabel
