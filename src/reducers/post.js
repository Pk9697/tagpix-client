import {
  FETCH_ALL_POSTS_ERROR,
  FETCH_ALL_POSTS_START,
  FETCH_ALL_POSTS_SUCCESS,
} from '../actions/actionTypes'

/* REDUCER */
export default function postReducer(state, action) {
  switch (action.type) {
    case FETCH_ALL_POSTS_START: {
      return {
        ...state,
        inProgress: true,
        posts: [],
        error: null,
      }
    }
    case FETCH_ALL_POSTS_SUCCESS: {
      return {
        ...state,
        inProgress: false,
        posts: action.payload,
        error: null,
      }
    }
    case FETCH_ALL_POSTS_ERROR: {
      return {
        ...state,
        inProgress: false,
        posts: [],
        error: action.payload,
      }
    }
    default:
      return state
  }
}
