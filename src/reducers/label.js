import {
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

    default:
      return state
  }
}
