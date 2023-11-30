/* eslint-disable react/style-prop-object */
import { Tabs } from 'flowbite-react'
import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import FileInputContainer from '../components/FileInput'
import TableContainer from '../components/TableContainer'
import { AuthContext } from '../context/authContext'
import notify from '../helpers/commonFunctions'
import { LabelContext } from '../context/labelContext'

function Admin() {
  const {
    authState: {
      user: { isAdmin },
    },
  } = useContext(AuthContext)

  const { labelState } = useContext(LabelContext)

  // console.log({ labelState })

  if (!isAdmin) {
    notify({
      type: 'error',
      msg: 'You are not an admin to view this page ! Redirecting to Home',
    })
    return <Navigate to="/" />
  }

  return (
    <Tabs className="px-4" aria-label="Default tabs" style="default">
      <Tabs.Item active title="Upload Image">
        <FileInputContainer />
      </Tabs.Item>
      <Tabs.Item title="Labels">
        <TableContainer labelState={labelState} />
      </Tabs.Item>
    </Tabs>
  )
}

export default Admin
