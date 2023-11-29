import {
  FETCH_ALL_LABELS_ERROR,
  FETCH_ALL_LABELS_START,
  FETCH_ALL_LABELS_SUCCESS,
} from './actionTypes'

/* ACTION CREATORS */
export const fetchAllLabelsStart = () => {
  return {
    type: FETCH_ALL_LABELS_START,
  }
}

export const fetchAllLabelsSuccess = (data) => {
  return {
    type: FETCH_ALL_LABELS_SUCCESS,
    payload: data,
  }
}

export const fetchAllLabelsError = (data) => {
  return {
    type: FETCH_ALL_LABELS_ERROR,
    payload: data,
  }
}
