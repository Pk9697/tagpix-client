import { useContext, useState } from 'react'
import useRedirect from './useRedirect'
import { AuthContext } from '../context/authContext'

function useRegister() {
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const {
    authState: {
      user: { isAdmin },
      isLoggedIn,
      inProgress,
    },
    registerUser,
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
    registerUser(formFields)
    setFormFields(() => {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }
    })
  }

  const { name, email, password, confirmPassword } = formFields

  return {
    name,
    email,
    password,
    confirmPassword,
    inProgress,
    redirect,
    handleChange,
    handleSubmit,
  }
}

export default useRegister
