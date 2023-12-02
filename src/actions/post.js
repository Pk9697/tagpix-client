import notify from '../helpers/commonFunctions'
import { APIUrls } from '../helpers/utils'
import {
  ASSIGN_LABEL_TO_POST_ERROR,
  ASSIGN_LABEL_TO_POST_START,
  ASSIGN_LABEL_TO_POST_SUCCESS,
  CREATE_POST_ERROR,
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  DELETE_POST_ERROR,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  FETCH_ALL_POSTS_ERROR,
  FETCH_ALL_POSTS_START,
  FETCH_ALL_POSTS_SUCCESS,
  REMOVE_LABEL_FROM_POST_ERROR,
  REMOVE_LABEL_FROM_POST_START,
  REMOVE_LABEL_FROM_POST_SUCCESS,
  UPDATE_POSTS_ERROR,
  UPDATE_POSTS_START,
  UPDATE_POSTS_SUCCESS,
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

export const updatePostsStart = () => {
  return {
    type: UPDATE_POSTS_START,
  }
}
export const updatePostsSuccess = (data) => {
  return {
    type: UPDATE_POSTS_SUCCESS,
    payload: data,
  }
}
export const updatePostsError = (data) => {
  return {
    type: UPDATE_POSTS_ERROR,
    payload: data,
  }
}

export const updatePosts = async ({ dispatch, posts }) => {
  dispatch(updatePostsStart())
  dispatch(updatePostsSuccess(posts))
}

export const removeLabelFromPostStart = () => {
  return {
    type: REMOVE_LABEL_FROM_POST_START,
  }
}
export const removeLabelFromPostSuccess = (data) => {
  return {
    type: REMOVE_LABEL_FROM_POST_SUCCESS,
    payload: data,
  }
}
export const removeLabelFromPostError = (data) => {
  return {
    type: REMOVE_LABEL_FROM_POST_ERROR,
    payload: data,
  }
}

export const removeLabelFromPost = async ({
  token,
  dispatch,
  postId,
  labelId,
}) => {
  dispatch(removeLabelFromPostStart())
  const url = APIUrls.removeLabelFromPost(postId, labelId)
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await res.json()
  if (data.success) {
    dispatch(removeLabelFromPostSuccess({ postId, labelId }))
    notify({ type: 'success', msg: data.message })
  } else {
    dispatch(removeLabelFromPost(data.message))
    notify({ type: 'error', msg: data.message })
  }
}

export const deletePostStart = () => {
  return {
    type: DELETE_POST_START,
  }
}
export const deletePostSuccess = (data) => {
  return {
    type: DELETE_POST_SUCCESS,
    payload: data,
  }
}
export const deletePostError = (data) => {
  return {
    type: DELETE_POST_ERROR,
    payload: data,
  }
}

export const deletePost = async ({ token, dispatch, postId }) => {
  dispatch(deletePostStart())
  const url = APIUrls.deletePost(postId)
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await res.json()
  if (data.success) {
    dispatch(deletePostSuccess(postId))
    notify({ type: 'success', msg: data.message })
  } else {
    dispatch(deletePost(data.message))
    notify({ type: 'error', msg: data.message })
  }
}
