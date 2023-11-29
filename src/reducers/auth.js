import {
  AUTHENTICATE_USER_START,
  AUTHENTICATE_USER_SUCCESS,
  LOGIN_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_ERROR,
  REGISTER_START,
  REGISTER_SUCCESS,
} from '../actions/actionTypes'

/* REDUCER */

export default function authReducer(state, action) {
  switch (action.type) {
    case LOGIN_START:
    case AUTHENTICATE_USER_START:
    case REGISTER_START: {
      return {
        ...state,
        inProgress: true,
        user: {},
        token: null,
        isLoggedIn: false,
        error: null,
      }
    }
    case LOGIN_SUCCESS:
    case AUTHENTICATE_USER_SUCCESS:
    case REGISTER_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
        inProgress: false,
        error: null,
      }
    }
    case LOGIN_ERROR:
    case REGISTER_ERROR: {
      return {
        ...state,
        error: action.payload,
        user: {},
        token: null,
        inProgress: false,
        isLoggedIn: false,
      }
    }

    case LOGOUT: {
      return {
        ...state,
        inProgress: false,
        user: {},
        token: null,
        isLoggedIn: false,
        error: null,
      }
    }
    default:
      return state
  }
}
