/* eslint-disable no-underscore-dangle */
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
    case CREATE_POST_START: {
      return {
        ...state,
        inProgress: true,
        error: null,
      }
    }
    case CREATE_POST_SUCCESS: {
      return {
        ...state,
        inProgress: false,
        posts: [action.payload, ...state.posts],
        error: null,
      }
    }
    case CREATE_POST_ERROR: {
      return {
        ...state,
        inProgress: false,
        error: action.payload,
      }
    }

    case ASSIGN_LABEL_TO_POST_START: {
      return {
        ...state,
        inProgress: true,
        error: null,
      }
    }
    case ASSIGN_LABEL_TO_POST_SUCCESS: {
      const updatedPosts = state.posts.map((post) =>
        post._id === action.payload.post._id
          ? {
              ...post,
              labels: [action.payload.label, ...post.labels],
            }
          : post
      )
      return {
        ...state,
        inProgress: false,
        posts: updatedPosts,
        error: null,
      }
    }
    case ASSIGN_LABEL_TO_POST_ERROR: {
      return {
        ...state,
        inProgress: false,
        error: action.payload,
      }
    }
    default:
      return state
  }
}
