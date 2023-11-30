import { useContext, useEffect, useReducer } from 'react'
import postReducer from '../reducers/post'
import notify from '../helpers/commonFunctions'
import { APIUrls } from '../helpers/utils'
import {
  assignLabelToPostError,
  assignLabelToPostStart,
  assignLabelToPostSuccess,
  createPostError,
  createPostStart,
  createPostSuccess,
  fetchAllPostsError,
  fetchAllPostsStart,
  fetchAllPostsSuccess,
} from '../actions/post'
import {
  assignPostToLabelError,
  assignPostToLabelStart,
  assignPostToLabelSuccess,
} from '../actions/label'
import { LabelContext } from '../context/labelContext'

const initialState = {
  posts: [],
  inProgress: false,
  error: null,
}

function usePost(token) {
  const [postState, dispatchPost] = useReducer(postReducer, initialState)

  const { dispatchLabel } = useContext(LabelContext)
  useEffect(() => {
    if (token) {
      // eslint-disable-next-line no-use-before-define
      fetchAllPosts(token)
    }
  }, [token])

  const fetchAllPosts = async () => {
    dispatchPost(fetchAllPostsStart())
    const url = APIUrls.fetchAllPosts()
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json()
    if (data.success) {
      dispatchPost(fetchAllPostsSuccess(data.data.posts))
    } else {
      dispatchPost(fetchAllPostsError(data.message))
      notify({ type: 'error', msg: data.message })
    }
  }
  // Don't include 'Content-Type': 'application/json' inside headers here as it gives PayloadTooLargeError: request entity too large error
  const createPost = async (formData) => {
    dispatchPost(createPostStart())
    const url = APIUrls.createPost()
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
    const data = await res.json()
    if (data.success) {
      dispatchPost(createPostSuccess(data.data.post))
      notify({ type: 'success', msg: data.message })
    } else {
      dispatchPost(createPostError(data.message))
      notify({ type: 'error', msg: data.message })
    }
  }

  const assignLabelToPost = async (postId, labelId) => {
    dispatchPost(assignLabelToPostStart())
    dispatchLabel(assignPostToLabelStart())

    const url = APIUrls.assignLabelToPost(postId, labelId)
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json()
    if (data.success) {
      dispatchPost(assignLabelToPostSuccess(data.data))
      dispatchLabel(assignPostToLabelSuccess(data.data))
      notify({ type: 'success', msg: data.message })
    } else {
      dispatchPost(assignLabelToPostError(data.message))
      dispatchLabel(assignPostToLabelError(data.data))
      notify({ type: 'error', msg: data.message })
    }
  }

  return { postState, createPost, assignLabelToPost }
}

export default usePost
