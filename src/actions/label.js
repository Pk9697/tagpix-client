import {
  CREATE_LABEL_ERROR,
  CREATE_LABEL_START,
  CREATE_LABEL_SUCCESS,
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

export const createLabelStart = () => {
  return {
    type: CREATE_LABEL_START,
  }
}

export const createLabelSuccess = (data) => {
  return {
    type: CREATE_LABEL_SUCCESS,
    payload: data,
  }
}

export const createLabelError = (data) => {
  return {
    type: CREATE_LABEL_ERROR,
    payload: data,
  }
}
