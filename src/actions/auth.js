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
} from './actionTypes'

/* ACTION CREATORS */
export const loginStart = () => {
  return {
    type: LOGIN_START,
  }
}

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  }
}

export const loginError = (data) => {
  return {
    type: LOGIN_ERROR,
    payload: data,
  }
}

export const logOut = () => {
  if (localStorage.getItem('token')) {
    localStorage.removeItem('token')
  }
  return {
    type: LOGOUT,
  }
}

export const authenticateUserStart = () => {
  return {
    type: AUTHENTICATE_USER_START,
  }
}
export const authenticateUserSuccess = (data) => {
  localStorage.setItem('token', data.token)
  return {
    type: AUTHENTICATE_USER_SUCCESS,
    payload: data,
  }
}
export const authenticateUserError = () => {
  return logOut()
}

export const registerStart = () => {
  return {
    type: REGISTER_START,
  }
}

export const registerSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  }
}

export const registerError = (data) => {
  return {
    type: REGISTER_ERROR,
    payload: data,
  }
}
