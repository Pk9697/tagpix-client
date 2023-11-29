import { FaPlus } from 'react-icons/fa6'
import { RiDeleteBin2Line } from 'react-icons/ri'
import SelectInput from './SelectInput'
import ScrollableList from './ScrollableList'

function ImageItem({ src, labelState }) {
  return (
    <div className="flex flex-col relative gap-2 pb-2 sm:gap-4 border border-gray-200 rounded-lg">
      <img className="h-auto max-w-full rounded-lg" src={src} alt="" />
      <div className="flex flex-row px-4 gap-1 justify-between items-center">
        <SelectInput labelState={labelState} />
        <FaPlus className="cursor-pointer hover:text-green-700" />
      </div>
      <ScrollableList includeRemoveIcon />
      <RiDeleteBin2Line className="absolute top-5 right-5 cursor-pointer hover:text-red-700" />
    </div>
  )
}

export default ImageItem
