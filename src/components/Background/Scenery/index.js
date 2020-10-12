import React from 'react'
import styles from './styles'
import SkyScraper from '../SkyScraper'

const Scenery = () => {

  return (
    <>
      <styles.SceneryLayer1 />
      <styles.SceneryLayer2 />
      <styles.ScenerySkyScraper>
        <SkyScraper />
      </styles.ScenerySkyScraper>
      <styles.SceneryLayer3 />
    </>
  )
}

export default Scenery