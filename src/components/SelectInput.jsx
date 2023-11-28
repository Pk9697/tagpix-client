import { Select } from 'flowbite-react'

function SelectInput() {
  return (
    <Select id="countries" required>
      <option>Select Label...</option>
      <option>Canada</option>
      <option>France</option>
      <option>Germany</option>
    </Select>
  )
}

export default SelectInput
