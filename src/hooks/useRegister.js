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
  const [isAdmin, setIsAdmin] = useState(false)
  const {
    authState: { user, isLoggedIn, inProgress },
    registerUser,
  } = useContext(AuthContext)

  const redirect = useRedirect(isLoggedIn, user.isAdmin)

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
    registerUser({ ...formFields, isAdmin })
    setFormFields(() => {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }
    })
    setIsAdmin(false)
  }

  const { name, email, password, confirmPassword } = formFields

  return {
    name,
    email,
    password,
    confirmPassword,
    isAdmin,
    setIsAdmin,
    inProgress,
    redirect,
    handleChange,
    handleSubmit,
  }
}

export default useRegister
