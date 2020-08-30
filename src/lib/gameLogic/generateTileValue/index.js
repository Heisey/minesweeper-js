// ????????????????????????????????????????????????????????????????
// ???????????????????? Generate Tile Value ???????????????????????
// ????????????????????????????????????????????????????????????????

import gameLogic from '../'

const generateTileValue = (board, row, col, params) => {
  let numberOfBombs = 0;

  const {
    topLeftCell,
    topCell,
    topRightCell,
    leftCell,
    rightCell,
    bottomLeftCell,
    bottomCell,
    bottomRightCell
  } = gameLogic.getAdjacentCells(board, row, col, params)
  
  // ?? Check top left corner
  if (topLeftCell) {
    if (topLeftCell.bomb) {
      numberOfBombs++
    }
  }

  // ?? Check top
  if (topCell) {
    if (topCell.bomb) {
      numberOfBombs++
    }
  }

  // ?? Check top right
  if (topRightCell) {
    if (topRightCell.bomb) {
      numberOfBombs++
    }
  }
  // ?? Check left
  if (leftCell) {
    if (leftCell.bomb) {
      numberOfBombs++
    }
  }
  // ?? check right
  if (rightCell) {
    if (rightCell.bomb) {
      numberOfBombs++
    }
  }
  // ?? check bottom left
  if (bottomLeftCell) {
    if (bottomLeftCell.bomb) {
      numberOfBombs++
    }
  }
  // ?? check bottom
  if (bottomCell) {
    if (bottomCell.bomb) {
      numberOfBombs++
    }
  }
  // ?? check bottom right
  if (bottomRightCell) {
    if (bottomRightCell.bomb) {
      numberOfBombs++
    }
  }

  if (numberOfBombs === 0) {
    return null
  }

  return numberOfBombs
}

export default generateTileValue