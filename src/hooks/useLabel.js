import { useEffect, useReducer } from 'react'
import labelReducer from '../reducers/label'
import notify from '../helpers/commonFunctions'
import {
  createLabelError,
  createLabelStart,
  createLabelSuccess,
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
  const [labelState, dispatch] = useReducer(labelReducer, initialState)

  useEffect(() => {
    if (token) {
      // eslint-disable-next-line no-use-before-define
      fetchAllLabels(token)
    }
  }, [token])

  const fetchAllLabels = async () => {
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

  const createLabel = async (content) => {
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

  return { labelState, createLabel }
}

export default useLabel
