import { Select } from 'flowbite-react'

function SelectInput({ labels = [], selectedLabelId, handleChange }) {
  return (
    <Select
      value={selectedLabelId}
      onChange={handleChange}
      id="labels"
      required
    >
      <option value="">Select Label...</option>
      {labels.map(({ _id, name }) => (
        <option key={_id} value={_id}>
          {name}
        </option>
      ))}
    </Select>
  )
}

export default SelectInput
