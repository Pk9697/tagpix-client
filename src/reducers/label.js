/* eslint-disable no-underscore-dangle */
import {
  ASSIGN_POST_TO_LABEL_ERROR,
  ASSIGN_POST_TO_LABEL_START,
  ASSIGN_POST_TO_LABEL_SUCCESS,
  CREATE_LABEL_ERROR,
  CREATE_LABEL_START,
  CREATE_LABEL_SUCCESS,
  DELETE_LABEL_ERROR,
  DELETE_LABEL_START,
  DELETE_LABEL_SUCCESS,
  FETCH_ALL_LABELS_ERROR,
  FETCH_ALL_LABELS_START,
  FETCH_ALL_LABELS_SUCCESS,
} from '../actions/actionTypes'

/* REDUCER */
export default function labelReducer(state, action) {
  switch (action.type) {
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
      return {
        ...state,
        // eslint-disable-next-line no-underscore-dangle
        labels: state.labels.filter((label) => label._id !== action.payload),
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

    case ASSIGN_POST_TO_LABEL_START: {
      return {
        ...state,
        inProgress: true,
        error: null,
      }
    }
    case ASSIGN_POST_TO_LABEL_SUCCESS: {
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
        labels: updatedLabels,
        error: null,
      }
    }
    case ASSIGN_POST_TO_LABEL_ERROR: {
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
