import React from 'react'
import styles from './styles'
import SkyScraper from '../SkyScraper'
import NeonSign from '../NeonSign'

const Scenery = () => {

  return (
    <>
      <styles.SceneryLayer1 />
      <styles.SceneryLayer2 />
      <styles.ScenerySkyScraper>
        <SkyScraper />
      </styles.ScenerySkyScraper>
      <styles.SceneryLayer3 />
      <NeonSign />
    </>
  )
}

export default Scenery