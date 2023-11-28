import ImageItem from './ImageItem'

function ImageGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 px-4 gap-4">
      <ImageItem src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" />
      <ImageItem src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" />
      <ImageItem src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" />
      <ImageItem src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" />
      <ImageItem src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" />
      <ImageItem src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" />
      <ImageItem src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" />
      <ImageItem src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" />
      <ImageItem src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" />
      <ImageItem src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" />
      <ImageItem src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" />
      <ImageItem src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" />
    </div>
  )
}

export default ImageGrid
