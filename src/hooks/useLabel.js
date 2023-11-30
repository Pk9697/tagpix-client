import { useEffect, useReducer } from 'react'
import labelReducer from '../reducers/label'
import notify from '../helpers/commonFunctions'
import {
  createLabelError,
  createLabelStart,
  createLabelSuccess,
  deleteLabelError,
  deleteLabelStart,
  deleteLabelSuccess,
  fetchAllLabelsError,
  fetchAllLabelsStart,
  fetchAllLabelsSuccess,
} from '../actions/label'
import { APIUrls } from '../helpers/utils'

const initialState = {
  labels: [],
  inProgress: false,
  error: null,
}

function useLabel(token) {
  const [labelState, dispatchLabel] = useReducer(labelReducer, initialState)

  useEffect(() => {
    if (token) {
      // eslint-disable-next-line no-use-before-define
      fetchAllLabels(token)
    }
  }, [token])

  const fetchAllLabels = async () => {
    dispatchLabel(fetchAllLabelsStart())
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
      dispatchLabel(fetchAllLabelsSuccess(data.data.labels))
    } else {
      dispatchLabel(fetchAllLabelsError(data.message))
      notify({ type: 'error', msg: data.message })
    }
  }

  const createLabel = async (content) => {
    const lowerCaseContent = content.toLowerCase()
    dispatchLabel(createLabelStart())
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
      dispatchLabel(createLabelSuccess(data.data.label))
      notify({ type: 'success', msg: data.message })
    } else {
      dispatchLabel(createLabelError(data.message))
      notify({ type: 'error', msg: data.message })
    }
  }

  const deleteLabel = async (labelId) => {
    dispatchLabel(deleteLabelStart())
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
      dispatchLabel(deleteLabelSuccess(labelId))
      notify({ type: 'success', msg: data.message })
    } else {
      dispatchLabel(deleteLabelError(data.message))
      notify({ type: 'error', msg: data.message })
    }
  }

  return { labelState, createLabel, deleteLabel, dispatchLabel }
}

export default useLabel
