import { toast } from 'react-toastify'

export default function notify({ type, msg = 'Default' }) {
  if (type === 'success') {
    return toast.success(msg, {
      autoClose: 1500,
    })
  }

  if (type === 'error') {
    return toast.error(msg, {
      autoClose: 1500,
    })
  }

  return toast(msg, {
    autoClose: 1500,
  })
}
