import { useEffect, useReducer } from 'react'
import postReducer from '../reducers/post'
import notify from '../helpers/commonFunctions'
import { APIUrls } from '../helpers/utils'
import {
  fetchAllPostsError,
  fetchAllPostsStart,
  fetchAllPostsSuccess,
} from '../actions/post'

const initialState = {
  posts: [],
  inProgress: false,
  error: null,
}

function usePost(token) {
  const [postState, dispatch] = useReducer(postReducer, initialState)

  useEffect(() => {
    if (token) {
      // eslint-disable-next-line no-use-before-define
      fetchAllPosts(token)
    }
  }, [token])

  const fetchAllPosts = async () => {
    dispatch(fetchAllPostsStart())
    const url = APIUrls.fetchAllPosts()
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json()
    if (data.success) {
      dispatch(fetchAllPostsSuccess(data.data.posts))
    } else {
      dispatch(fetchAllPostsError(data.message))
      notify({ type: 'error', msg: data.message })
    }
  }

  return { postState }
}

export default usePost
