import { useEffect, useReducer } from 'react'
import labelReducer from '../reducers/label'
import notify from '../helpers/commonFunctions'
import {
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

  return { labelState }
}

export default useLabel
