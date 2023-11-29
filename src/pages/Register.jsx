/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Label, TextInput } from 'flowbite-react'
import { Navigate } from 'react-router-dom'
import useRegister from '../hooks/useRegister'

function Register() {
  const {
    name,
    email,
    password,
    confirmPassword,
    inProgress,
    redirect,
    handleChange,
    handleSubmit,
  } = useRegister()

  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name1" value="Your name" />
            </div>
            <TextInput
              name="name"
              value={name}
              onChange={handleChange}
              id="name1"
              type="text"
              placeholder="Joe Biden"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              name="email"
              value={email}
              onChange={handleChange}
              id="email1"
              type="email"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              name="password"
              value={password}
              onChange={handleChange}
              id="password1"
              type="password"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Confirm password" />
            </div>
            <TextInput
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              id="password2"
              type="password"
              required
            />
          </div>
          <Button disabled={inProgress} type="submit">
            {inProgress ? 'LOGGING IN' : 'REGISTER'}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Register
