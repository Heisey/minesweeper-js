import React from 'react'
import styles from './styles'

const NeonSign = () => {
  
  return (
    <styles.NeonSign>
      <styles.Board>
        <styles.BoardFront />
        <styles.BoardFrontRightSide />
      </styles.Board>
      <styles.Legs>
        <styles.LeftLegFront />
        {/* <styles.LeftLegSide /> */}
      </styles.Legs>
    </styles.NeonSign>
  )
}

export default NeonSign