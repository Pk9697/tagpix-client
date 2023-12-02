import { useContext, useState } from 'react'
import ScrollableItem from './ScrollableItem'
import { PostLabelContext } from '../context/postLabelContext'

function ScrollableList({ postId, includeRemoveIcon = false, labels = [] }) {
  const { fetchAllPosts, filterPostsByLabel } = useContext(PostLabelContext)
  const [selectedLabelId, setSelectedLabelId] = useState('all')

  const handleFilter = (labelId) => {
    if (!includeRemoveIcon) {
      if (labelId === 'all') {
        fetchAllPosts()
        setSelectedLabelId('all')
      } else {
        setSelectedLabelId(labelId)
        filterPostsByLabel({ labelId })
      }
    }
  }

  return (
    <div
      className={`${
        includeRemoveIcon && 'absolute bottom-14 left-0 w-full'
      } scrollableList__labels flex items-center px-4 py-4 md:py-8 overflow-y-auto`}
    >
      {!includeRemoveIcon && (
        <button
          onClick={() => handleFilter('all')}
          type="button"
          className={`${
            selectedLabelId === 'all'
              ? 'text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800'
              : 'backdrop-blur-[20px] flex gap-4 cursor-pointer items-center text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center dark:text-white dark:focus:ring-gray-800'
          }`}
        >
          All
        </button>
      )}

      {labels.map(({ _id, name }) => (
        <ScrollableItem
          selectedLabelId={selectedLabelId}
          key={_id}
          includeRemoveIcon={includeRemoveIcon}
          name={name}
          handleFilter={() => handleFilter(_id)}
          labelId={_id}
          postId={postId}
        />
      ))}
    </div>
  )
}

export default ScrollableList
