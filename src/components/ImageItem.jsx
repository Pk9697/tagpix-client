import { FaPlus } from 'react-icons/fa6'
import { useContext, useState } from 'react'
import { RiDeleteBin2Line } from 'react-icons/ri'
import SelectInput from './SelectInput'
import ScrollableList from './ScrollableList'
import { BASE_ROOT } from '../helpers/utils'
import { LabelContext } from '../context/labelContext'
import { PostContext } from '../context/postContext'

function ImageItem({ postId, src, labels = [] }) {
  const { labelState: { labels: allLabels = [] } = {} } =
    useContext(LabelContext)

  const { assignLabel } = useContext(PostContext)

  const [selectedLabelId, setSelectedLabelId] = useState('')
  const handleChange = (e) => {
    setSelectedLabelId(e.target.value)
  }

  const handleAssignLabel = () => {
    if (selectedLabelId) {
      assignLabel(postId, selectedLabelId)
    }
    setSelectedLabelId('')
  }

  return (
    <div className="flex flex-col relative gap-2 pb-2 sm:gap-4 border border-gray-200 rounded-lg">
      <img
        className="h-full object-cover max-w-full rounded-lg"
        src={BASE_ROOT + src}
        alt="image_item"
      />
      <div className="flex flex-row px-4 gap-1 justify-between items-center">
        <SelectInput
          selectedLabelId={selectedLabelId}
          handleChange={handleChange}
          labels={allLabels}
        />
        <FaPlus
          onClick={handleAssignLabel}
          className="cursor-pointer hover:text-green-700"
        />
      </div>
      <ScrollableList labels={labels} includeRemoveIcon />
      <RiDeleteBin2Line className="absolute top-5 right-5 cursor-pointer hover:text-red-700" />
    </div>
  )
}

export default ImageItem
