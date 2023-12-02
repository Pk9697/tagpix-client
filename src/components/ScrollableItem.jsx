import { CiCircleRemove } from 'react-icons/ci'

function ScrollableItem({
  labelId,
  selectedLabelId,
  handleFilter,
  name,
  includeRemoveIcon = false,
}) {
  return (
    <div
      className={`${
        labelId === selectedLabelId
          ? 'text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800'
          : 'backdrop-blur-[20px] flex gap-4 cursor-pointer items-center text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center dark:text-white dark:focus:ring-gray-800'
      }`}
    >
      <button onClick={handleFilter} type="button" className="">
        {name}
      </button>
      {includeRemoveIcon && (
        <div className="flex items-center justify-center">
          <CiCircleRemove className="hover:text-red-700" />
        </div>
      )}
    </div>
  )
}

export default ScrollableItem
