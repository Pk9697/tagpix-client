import ImageItem from './ImageItem'

function ImageGrid({ posts = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 gap-4">
      {posts.map(({ _id, image, labels }) => (
        <ImageItem key={_id} postId={_id} src={image} labels={labels} />
      ))}
    </div>
  )
}

export default ImageGrid
