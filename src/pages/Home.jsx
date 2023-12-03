import { useContext } from 'react'
import ReactPaginate from 'react-paginate'
import ImageGrid from '../components/ImageGrid'
import ScrollableList from '../components/ScrollableList'
import { PostLabelContext } from '../context/postLabelContext'
import usePaginate from '../hooks/usePaginate'

function Home() {
  const { postLabelState: { labels = [], posts = [] } = {} } =
    useContext(PostLabelContext)

  const { subset, totalPages, handlePageChange, currentPage } =
    usePaginate(posts)

  return (
    <>
      <ScrollableList labels={labels} />
      <ImageGrid posts={subset} />
      <ReactPaginate
        pageCount={totalPages}
        onPageChange={handlePageChange}
        forcePage={currentPage}
        previousLabel="<<"
        nextLabel=">>"
        breakLabel="..."
        containerClassName="flex justify-center items-center mt-4 gap-1"
        pageLinkClassName="py-2 px-3.5 cursor-pointer hover:bg-teal-300 hover:text-white"
        previousLinkClassName="py-2 px-3.5 cursor-pointer hover:bg-teal-300 hover:text-white"
        nextLinkClassName="py-2 px-3.5 cursor-pointer hover:bg-teal-300 hover:text-white"
        activeClassName="bg-teal-300"
      />
    </>
  )
}

export default Home
