/* eslint-disable no-underscore-dangle */
import {
  ASSIGN_LABEL_TO_POST_ERROR,
  ASSIGN_LABEL_TO_POST_START,
  ASSIGN_LABEL_TO_POST_SUCCESS,
  CREATE_LABEL_ERROR,
  CREATE_LABEL_START,
  CREATE_LABEL_SUCCESS,
  CREATE_POST_ERROR,
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  DELETE_LABEL_ERROR,
  DELETE_LABEL_START,
  DELETE_LABEL_SUCCESS,
  DELETE_POST_ERROR,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  FETCH_ALL_LABELS_ERROR,
  FETCH_ALL_LABELS_START,
  FETCH_ALL_LABELS_SUCCESS,
  FETCH_ALL_POSTS_ERROR,
  FETCH_ALL_POSTS_START,
  FETCH_ALL_POSTS_SUCCESS,
  FILTER_POSTS_BY_LABEL_ERROR,
  FILTER_POSTS_BY_LABEL_START,
  FILTER_POSTS_BY_LABEL_SUCCESS,
  REMOVE_LABEL_FROM_POST_ERROR,
  REMOVE_LABEL_FROM_POST_START,
  REMOVE_LABEL_FROM_POST_SUCCESS,
  UPDATE_POSTS_SUCCESS,
} from '../actions/actionTypes'

/* REDUCER */
export default function postLabelReducer(state, action) {
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
    case FETCH_ALL_LABELS_START: {
      return {
        ...state,
        inProgress: true,
        labels: [],
        error: null,
      }
    }
    case FETCH_ALL_LABELS_SUCCESS: {
      return {
        ...state,
        inProgress: false,
        labels: action.payload,
        error: null,
      }
    }
    case FETCH_ALL_LABELS_ERROR: {
      return {
        ...state,
        inProgress: false,
        labels: [],
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
    case CREATE_LABEL_START: {
      return {
        ...state,
        inProgress: true,
        error: null,
      }
    }
    case CREATE_LABEL_SUCCESS: {
      return {
        ...state,
        labels: [action.payload, ...state.labels],
        inProgress: false,
        error: null,
      }
    }
    case CREATE_LABEL_ERROR: {
      return {
        ...state,
        inProgress: false,
        error: action.payload,
      }
    }
    case DELETE_LABEL_START: {
      return {
        ...state,
        inProgress: true,
        error: null,
      }
    }
    case DELETE_LABEL_SUCCESS: {
      const updatedPosts = state.posts.map((post) => ({
        ...post,
        labels: post.labels.filter((label) => label._id !== action.payload),
      }))

      return {
        ...state,
        labels: state.labels.filter((label) => label._id !== action.payload),
        posts: updatedPosts,
        inProgress: false,
        error: null,
      }
    }
    case DELETE_LABEL_ERROR: {
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
      // ! Not needed anymore cos we are fetching posts filtered from api
      const updatedLabels = state.labels.map((label) =>
        label._id === action.payload.label._id
          ? {
              ...label,
              posts: [action.payload.post, ...label.posts],
            }
          : label
      )
      return {
        ...state,
        inProgress: false,
        posts: updatedPosts,
        labels: updatedLabels,
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
    case UPDATE_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
      }
    }
    case REMOVE_LABEL_FROM_POST_START: {
      return {
        ...state,
        inProgress: true,
        error: null,
      }
    }
    case REMOVE_LABEL_FROM_POST_SUCCESS: {
      const updatedPosts = state.posts.map((post) =>
        post._id === action.payload.postId
          ? {
              ...post,
              labels: post.labels.filter(
                (label) => label._id !== action.payload.labelId
              ),
            }
          : post
      )
      // ! Not needed anymore cos we are fetching posts filtered from api
      const updatedLabels = state.labels.map((label) =>
        label._id === action.payload.labelId
          ? {
              ...label,
              posts: label.posts.filter(
                (post) => post._id !== action.payload.postId
              ),
            }
          : label
      )

      return {
        ...state,
        posts: updatedPosts,
        labels: updatedLabels,
        inProgress: false,
        error: null,
      }
    }
    case REMOVE_LABEL_FROM_POST_ERROR: {
      return {
        ...state,
        inProgress: false,
        error: action.payload,
      }
    }

    case FILTER_POSTS_BY_LABEL_START: {
      return {
        ...state,
        inProgress: true,
        error: null,
      }
    }
    case FILTER_POSTS_BY_LABEL_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
        inProgress: false,
        error: null,
      }
    }
    case FILTER_POSTS_BY_LABEL_ERROR: {
      return {
        ...state,
        inProgress: false,
        error: action.payload,
      }
    }

    case DELETE_POST_START: {
      return {
        ...state,
        inProgress: true,
        error: null,
      }
    }
    // TODO Update Labels from api
    case DELETE_POST_SUCCESS: {
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
        inProgress: false,
        error: null,
      }
    }
    case DELETE_POST_ERROR: {
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
