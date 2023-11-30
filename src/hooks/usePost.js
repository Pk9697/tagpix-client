import { useEffect, useReducer } from 'react'
import postReducer from '../reducers/post'
import notify from '../helpers/commonFunctions'
import { APIUrls } from '../helpers/utils'
import {
  assignLabelError,
  assignLabelStart,
  assignLabelSuccess,
  createPostError,
  createPostStart,
  createPostSuccess,
  fetchAllPostsError,
  fetchAllPostsStart,
  fetchAllPostsSuccess,
} from '../actions/post'

const initialState = {
  posts: [],
  inProgress: false,
  error: null,
}

function usePost(token) {
  const [postState, dispatch] = useReducer(postReducer, initialState)

  useEffect(() => {
    if (token) {
      // eslint-disable-next-line no-use-before-define
      fetchAllPosts(token)
    }
  }, [token])

  const fetchAllPosts = async () => {
    dispatch(fetchAllPostsStart())
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
      dispatch(fetchAllPostsSuccess(data.data.posts))
    } else {
      dispatch(fetchAllPostsError(data.message))
      notify({ type: 'error', msg: data.message })
    }
  }
  // Don't include 'Content-Type': 'application/json' inside headers here as it gives PayloadTooLargeError: request entity too large error
  const createPost = async (formData) => {
    dispatch(createPostStart())
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
      dispatch(createPostSuccess(data.data.post))
      notify({ type: 'success', msg: data.message })
    } else {
      dispatch(createPostError(data.message))
      notify({ type: 'error', msg: data.message })
    }
  }

  const assignLabel = async (postId, labelId) => {
    dispatch(assignLabelStart())
    const url = APIUrls.assignLabel(postId, labelId)
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json()
    if (data.success) {
      dispatch(assignLabelSuccess(data.data))
      notify({ type: 'success', msg: data.message })
    } else {
      dispatch(assignLabelError(data.message))
      notify({ type: 'error', msg: data.message })
    }
  }

  return { postState, createPost, assignLabel }
}

export default usePost
