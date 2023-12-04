import { FaPlus } from 'react-icons/fa6'
import { useContext, useState } from 'react'
import { RiDeleteBin2Line } from 'react-icons/ri'
import SelectInput from './SelectInput'
import ScrollableList from './ScrollableList'
import { BASE_ROOT } from '../helpers/utils'
import { PostLabelContext } from '../context/postLabelContext'

function ImageItem({ postId, src, labels = [] }) {
  const {
    postLabelState: { labels: allLabels = [] } = {},
    assignLabelToPost,
    deletePost,
  } = useContext(PostLabelContext)

  const [selectedLabelId, setSelectedLabelId] = useState('')
  const handleChange = (e) => {
    setSelectedLabelId(e.target.value)
  }

  const handleAssignLabel = () => {
    if (selectedLabelId) {
      assignLabelToPost({ postId, labelId: selectedLabelId })
    }
    setSelectedLabelId('')
  }

  const handleDeletePost = () => {
    deletePost({ postId })
  }

  return (
    <div className="flex flex-col aspect-[3/4] relative gap-2 pb-2 sm:gap-4 border border-gray-200 rounded-lg">
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
      <ScrollableList postId={postId} labels={labels} includeRemoveIcon />
      <RiDeleteBin2Line
        onClick={handleDeletePost}
        className="absolute top-5 right-5 cursor-pointer hover:text-red-700"
      />
    </div>
  )
}

export default ImageItem
