
// ????????????????????????????????????????????????????????????????
// ?????????????????????????? Game Tile ???????????????????????????
// ????????????????????????????????????????????????????????????????

// ??????????????????????? Vendor Modules ?????????????????????????
import React from 'react';

// ???????????????????????? File Modules ??????????????????????????

// ?? Styles
import './GameTile.scss'

const GameTile = (props) => {

  const { 
    info,
    flagTile,
    tileClickEvent
  } = props

  const handleTileClickEvent = () => {
    tileClickEvent(info.grid)
  }

  const handleRightClickEvent = e => {
    e.preventDefault()
    flagTile(info.grid)
  }

  return (
    <div 
      className={`GameTile ${info.clicked && 'GameTile__clicked'} ${info.exploded && 'GameTile__boom'}`}
      onClick={handleTileClickEvent}
      onContextMenu={handleRightClickEvent}
    >
      {info.clicked && (<div className="GameTile__info">
        {info.bomb ? <i className="fas fa-bomb"></i> : info.number}
      </div>)}
      
      {(info.flagged && !info.clicked) && (
        <div className="GameTile__flagged">
          <i className="fas fa-flag"></i>
        </div>
      )}
    </div>
  )
}

export default GameTile