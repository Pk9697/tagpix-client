/* eslint-disable jsx-a11y/anchor-is-valid */
import { Checkbox, Table, TextInput, Button } from 'flowbite-react'
import { useContext, useEffect, useState } from 'react'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { PostLabelContext } from '../context/postLabelContext'

function TableContainer() {
  const [label, setLabel] = useState('')
  const [selectAllCheck, setSelectAllCheck] = useState(false)
  const {
    postLabelState: { labels = [] } = {},
    createLabel,
    deleteLabel,
    toggleCheckLabel,
    deleteCheckedLabels,
    selectAll,
  } = useContext(PostLabelContext)

  useEffect(() => {
    selectAll({ selectAllCheck })
  }, [selectAllCheck])

  const handleCreateLabel = (e) => {
    e.preventDefault()
    createLabel({ content: label })
    setLabel('')
  }

  const handleToggleCheckLabel = (labelId) => {
    toggleCheckLabel({ labelId })
  }

  const handleDeleteSelected = () => {
    setSelectAllCheck(false)
    deleteCheckedLabels({ labels })
  }

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleCreateLabel} className="flex items-center gap-2">
        <TextInput
          name="label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          id="small"
          type="text"
          placeholder="Type New Label"
          sizing="sm"
          required
        />
        <Button type="submit" color="success" size="sm">
          Create
        </Button>
      </form>
      <div>
        <Button color="failure" onClick={handleDeleteSelected}>
          Delete Selected
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="p-4">
              <Checkbox
                checked={selectAllCheck}
                onChange={() => setSelectAllCheck((prev) => !prev)}
              />
            </Table.HeadCell>
            <Table.HeadCell>Labels</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {labels.map(({ _id, name, isChecked }) => (
              <Table.Row
                key={_id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="p-4">
                  <Checkbox
                    checked={isChecked}
                    onChange={() => handleToggleCheckLabel(_id)}
                  />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {name}
                </Table.Cell>
                <Table.Cell>
                  <button
                    type="button"
                    className="font-medium text-red-600 hover:underline dark:text-cyan-500"
                    onClick={() => deleteLabel({ labelId: _id })}
                  >
                    <RiDeleteBin2Line />
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}

export default TableContainer
