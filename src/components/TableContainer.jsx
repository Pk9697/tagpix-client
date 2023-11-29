/* eslint-disable jsx-a11y/anchor-is-valid */
import { Checkbox, Table, TextInput, Button } from 'flowbite-react'
import { RiDeleteBin2Line } from 'react-icons/ri'

function TableContainer() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <TextInput
          id="small"
          type="text"
          placeholder="Type New Label"
          sizing="sm"
        />
        <Button color="success" size="sm">
          Create
        </Button>
      </div>
      <div>
        <Button color="failure">Delete Selected</Button>
      </div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="p-4">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Labels</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {`Apple MacBook Pro 17"`}
              </Table.Cell>
              <Table.Cell>
                <button
                  type="button"
                  className="font-medium text-red-600 hover:underline dark:text-cyan-500"
                >
                  <RiDeleteBin2Line />
                </button>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Microsoft Surface Pro
              </Table.Cell>
              <Table.Cell>
                <button
                  type="button"
                  className="font-medium text-red-600 hover:underline dark:text-cyan-500"
                >
                  <RiDeleteBin2Line />
                </button>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Magic Mouse 2
              </Table.Cell>
              <Table.Cell>
                <button
                  type="button"
                  className="font-medium text-red-600 hover:underline dark:text-cyan-500"
                >
                  <RiDeleteBin2Line />
                </button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}

export default TableContainer
