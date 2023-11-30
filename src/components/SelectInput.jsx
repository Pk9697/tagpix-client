import { Select } from 'flowbite-react'

function SelectInput({ labels = [] }) {
  return (
    <Select id="labels" required>
      <option>Select Label...</option>
      {labels.map(({ _id, name }) => (
        <option key={_id}>{name}</option>
      ))}
    </Select>
  )
}

export default SelectInput
