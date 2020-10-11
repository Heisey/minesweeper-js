
// ????????????????????????????????????????????????????????????????
// ?????????????????????????? Info Box ????????????????????????????
// ????????????????????????????????????????????????????????????????

// ??????????????????????? Vendor Modules ?????????????????????????
import React from 'react';

// ???????????????????????? File Modules ??????????????????????????

// ?? Styles
import styles from './styles'

const InfoBox = (props) => {

  const { 
    info,
    isBomb
  } = props

  return (
    <styles.Base>
      {isBomb && <styles.Info>
        <i className='fas fa-bomb'></i>
      </styles.Info>}
      <styles.Time>
        {info}
      </styles.Time>
    </styles.Base>
  )
}

export default InfoBox