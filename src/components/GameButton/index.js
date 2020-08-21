
// ????????????????????????????????????????????????????????????????
// ????????????????????????? Game Button ??????????????????????????
// ????????????????????????????????????????????????????????????????

// ??????????????????????? Vendor Modules ?????????????????????????
import React from 'react';

// ???????????????????????? File Modules ??????????????????????????

// ?? Styles
import './GameButton.scss'

const GameButton = (props) => {

  const {
    buttonClickEvent,
    icon
  } = props
  return (
    <div 
      className='GameButton'
      onClick={buttonClickEvent}
    >
      <i className={`fas fa-${icon}`}></i>
    </div>
  )
}

export default GameButton