import { useContext } from 'react'
import ImageGrid from '../components/ImageGrid'
import ScrollableList from '../components/ScrollableList'
import { LabelContext } from '../context/labelContext'

function Home() {
  const { labelState } = useContext(LabelContext)

  return (
    <>
      <ScrollableList labelState={labelState} />
      <ImageGrid labelState={labelState} />
    </>
  )
}

export default Home
