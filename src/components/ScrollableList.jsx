import ScrollableItem from './ScrollableItem'

function ScrollableList({ includeRemoveIcon = false, labels = [] }) {
  return (
    <div
      className={`${
        includeRemoveIcon && 'absolute bottom-14 left-0 w-full'
      } scrollableList__labels flex items-center px-4 py-4 md:py-8 overflow-y-auto`}
    >
      {!includeRemoveIcon && (
        <button
          type="button"
          className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        >
          All
        </button>
      )}

      {labels.map(({ _id, name }) => (
        <ScrollableItem
          key={_id}
          includeRemoveIcon={includeRemoveIcon}
          name={name}
        />
      ))}
    </div>
  )
}

export default ScrollableList
