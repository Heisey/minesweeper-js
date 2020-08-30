
// ????????????????????????????????????????????????????????????????
// ????????????????????????? Game Score ???????????????????????????
// ????????????????????????????????????????????????????????????????

// ??????????????????????? Vendor Modules ?????????????????????????
import React from 'react';

// ???????????????????????? File Modules ??????????????????????????
// ?? Components

// ?? Styles
import './GameScore.scss'

const GameScore = (props) => {

  const { calcScore } = props

  return (
    <div className='GameScore'>
      {`YOU SCORED: ${calcScore()} POINTS`}
    </div>
  )
}

export default GameScore