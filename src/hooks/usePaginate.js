import { useEffect, useState } from 'react'

function usePaginate(posts) {
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const itemsPerPage = 6

  useEffect(() => {
    setTotalPages(Math.ceil(posts.length / itemsPerPage))
    setCurrentPage(0)
  }, [posts])

  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const subset = posts.slice(startIndex, endIndex)

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected)
  }

  return { subset, totalPages, handlePageChange, currentPage }
}

export default usePaginate
