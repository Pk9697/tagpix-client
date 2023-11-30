import { useContext } from 'react'
import ImageGrid from '../components/ImageGrid'
import ScrollableList from '../components/ScrollableList'
import { LabelContext } from '../context/labelContext'
import { PostContext } from '../context/postContext'

function Home() {
  const { labelState: { labels } = {} } = useContext(LabelContext)
  const { postState } = useContext(PostContext)
  console.log({ labels }, { postState })

  return (
    <>
      <ScrollableList labels={labels} />
      <ImageGrid postState={postState} />
    </>
  )
}

export default Home
