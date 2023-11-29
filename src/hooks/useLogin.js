import { useContext, useState } from 'react'
import useRedirect from './useRedirect'
import { AuthContext } from '../context/authContext'

function useLogin() {
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  })

  const {
    authState: {
      user: { isAdmin },
      isLoggedIn,
      inProgress,
    },
    loginUser,
  } = useContext(AuthContext)

  const redirect = useRedirect(isLoggedIn, isAdmin)

  function handleChange(e) {
    const { name, value } = e.target
    setFormFields((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    loginUser(formFields)
    setFormFields(() => {
      return {
        email: '',
        password: '',
      }
    })
  }

  const { email, password } = formFields
  return { email, password, inProgress, redirect, handleChange, handleSubmit }
}

export default useLogin
