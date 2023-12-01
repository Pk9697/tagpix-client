import notify from '../helpers/commonFunctions'
import { APIUrls } from '../helpers/utils'
import {
  ASSIGN_LABEL_TO_POST_ERROR,
  ASSIGN_LABEL_TO_POST_START,
  ASSIGN_LABEL_TO_POST_SUCCESS,
  CREATE_POST_ERROR,
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  FETCH_ALL_POSTS_ERROR,
  FETCH_ALL_POSTS_START,
  FETCH_ALL_POSTS_SUCCESS,
} from './actionTypes'

/* ACTION CREATORS */
export const fetchAllPostsStart = () => {
  return {
    type: FETCH_ALL_POSTS_START,
  }
}

export const fetchAllPostsSuccess = (data) => {
  return {
    type: FETCH_ALL_POSTS_SUCCESS,
    payload: data,
  }
}

export const fetchAllPostsError = (data) => {
  return {
    type: FETCH_ALL_POSTS_ERROR,
    payload: data,
  }
}

export const fetchAllPosts = async ({ token, dispatch }) => {
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

export const createPostStart = () => {
  return {
    type: CREATE_POST_START,
  }
}

export const createPostSuccess = (data) => {
  return {
    type: CREATE_POST_SUCCESS,
    payload: data,
  }
}

export const createPostError = (data) => {
  return {
    type: CREATE_POST_ERROR,
    payload: data,
  }
}

// Don't include 'Content-Type': 'application/json' inside headers here as it gives PayloadTooLargeError: request entity too large error
export const createPost = async ({ formData, token, dispatch }) => {
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

export const assignLabelToPostStart = () => {
  return {
    type: ASSIGN_LABEL_TO_POST_START,
  }
}

export const assignLabelToPostSuccess = (data) => {
  return {
    type: ASSIGN_LABEL_TO_POST_SUCCESS,
    payload: data,
  }
}

export const assignLabelToPostError = (data) => {
  return {
    type: ASSIGN_LABEL_TO_POST_ERROR,
    payload: data,
  }
}

export const assignLabelToPost = async ({
  postId,
  labelId,
  token,
  dispatch,
}) => {
  dispatch(assignLabelToPostStart())

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
    dispatch(assignLabelToPostSuccess(data.data))
    notify({ type: 'success', msg: data.message })
  } else {
    dispatch(assignLabelToPostError(data.message))
    notify({ type: 'error', msg: data.message })
  }
}
