import { useContext } from 'react'
import ImageGrid from '../components/ImageGrid'
import ScrollableList from '../components/ScrollableList'
import { PostLabelContext } from '../context/postLabelContext'

function Home() {
  const { postLabelState: { labels, posts } = {} } =
    useContext(PostLabelContext)

  // console.log({ posts, labels })

  return (
    <>
      <ScrollableList labels={labels} />
      <ImageGrid posts={posts} />
    </>
  )
}

export default Home
