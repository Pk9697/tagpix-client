import {
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
