/* eslint-disable react/style-prop-object */
import { Tabs } from 'flowbite-react'
import FileInputContainer from '../components/FileInput'
import TableContainer from '../components/TableContainer'

function Admin() {
  return (
    <Tabs className="px-4" aria-label="Default tabs" style="default">
      <Tabs.Item active title="Upload Image">
        <FileInputContainer />
      </Tabs.Item>
      <Tabs.Item title="Labels">
        <TableContainer />
      </Tabs.Item>
    </Tabs>
  )
}

export default Admin
