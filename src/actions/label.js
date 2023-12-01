import notify from '../helpers/commonFunctions'
import { APIUrls } from '../helpers/utils'
import {
  CREATE_LABEL_ERROR,
  CREATE_LABEL_START,
  CREATE_LABEL_SUCCESS,
  DELETE_LABEL_ERROR,
  DELETE_LABEL_START,
  DELETE_LABEL_SUCCESS,
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

export const fetchAllLabels = async ({ token, dispatch }) => {
  dispatch(fetchAllLabelsStart())
  const url = APIUrls.fetchAllLabels()
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await res.json()
  if (data.success) {
    dispatch(fetchAllLabelsSuccess(data.data.labels))
  } else {
    dispatch(fetchAllLabelsError(data.message))
    notify({ type: 'error', msg: data.message })
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

export const createLabel = async ({ content, token, dispatch }) => {
  const lowerCaseContent = content.toLowerCase()
  dispatch(createLabelStart())
  const url = APIUrls.createLabel(lowerCaseContent)
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await res.json()
  if (data.success) {
    dispatch(createLabelSuccess(data.data.label))
    notify({ type: 'success', msg: data.message })
  } else {
    dispatch(createLabelError(data.message))
    notify({ type: 'error', msg: data.message })
  }
}

export const deleteLabelStart = () => {
  return {
    type: DELETE_LABEL_START,
  }
}

export const deleteLabelSuccess = (data) => {
  return {
    type: DELETE_LABEL_SUCCESS,
    payload: data,
  }
}

export const deleteLabelError = (data) => {
  return {
    type: DELETE_LABEL_ERROR,
    payload: data,
  }
}

export const deleteLabel = async ({ labelId, token, dispatch }) => {
  dispatch(deleteLabelStart())
  const url = APIUrls.deleteLabel(labelId)
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await res.json()
  if (data.success) {
    dispatch(deleteLabelSuccess(labelId))
    notify({ type: 'success', msg: data.message })
  } else {
    dispatch(deleteLabelError(data.message))
    notify({ type: 'error', msg: data.message })
  }
}
