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
