// ????????????????????????????????????????????????????????????????
// ??????????????????? Clear Adjacent Tiles ???????????????????????
// ????????????????????????????????????????????????????????????????

import gameLogic from '../'

/**
 * Clears all adjacent tiles.
 * A recursive function
 * @param {[[]]} board A game board
 * @param {[Number, Number]} cellCoords The current object selected in board
 * @param {{
    * rows: Number
    * cols: Number
    * bombs: Number
 * }} params the game parameters
 * @return {[[]]} A new game board
 */

const clearAdjacentTiles = (board, cellCoords, params) => {
  
  const newBoard = board.slice()

  const curCell = newBoard[cellCoords[0]][cellCoords[1]]

  if (curCell.flagged || curCell.clicked) {
    return newBoard
  }

  const {
    topLeftCell,
    topCell,
    topRightCell,
    leftCell,
    rightCell,
    bottomLeftCell,
    bottomCell,
    bottomRightCell
  } = gameLogic.getAdjacentCells(board, cellCoords[0], cellCoords[1], params)

  curCell.clicked = true

  // ?? Clear Top Left Cell
  if (topLeftCell) {
    if (!topLeftCell.number) {
      clearAdjacentTiles(newBoard, topLeftCell.grid, params)
    } else {
      topLeftCell.clicked = true
      newBoard[topLeftCell.grid[0]][topLeftCell.grid[1]] = topLeftCell
    }
  }

  // // ?? Clear Top Cell
  if (topCell) {
    if (!topCell.number) {
      clearAdjacentTiles(newBoard, topCell.grid, params)
    } else {
      topCell.clicked = true
      newBoard[topCell.grid[0]][topCell.grid[1]] = topCell
    }
  }
  
  // ?? Clear Top Right Cell
  if (topRightCell) {
    if (!topRightCell.number) {
      clearAdjacentTiles(newBoard, topRightCell.grid, params)
    } else {
      topRightCell.clicked = true
      newBoard[topRightCell.grid[0]][topRightCell.grid[1]] = topRightCell
    }
  }
  
  // ?? Clear Left Cell
  if (leftCell) {
    if (!leftCell.number) {
      clearAdjacentTiles(newBoard, leftCell.grid, params)
    } else {
      leftCell.clicked = true
      newBoard[leftCell.grid[0]][leftCell.grid[1]] = leftCell
    }
  }
  
  // ?? Clear Right Cell
  if (rightCell) {
    if (!rightCell.number) {
      clearAdjacentTiles(newBoard, rightCell.grid, params)
    } else {
      rightCell.clicked = true
      newBoard[rightCell.grid[0]][rightCell.grid[1]] = rightCell
    }
  }
  
  // ?? Clear Bottom Left Cell
  if (bottomLeftCell) {
    if (!bottomLeftCell.number) {
      clearAdjacentTiles(newBoard, bottomLeftCell.grid, params)
    } else {
      bottomLeftCell.clicked = true
      newBoard[bottomLeftCell.grid[0]][bottomLeftCell.grid[1]] = bottomLeftCell
    }
  }
  
  // ?? Clear Bottom Cell
  if (bottomCell) {
    if (!bottomCell.number) {
      clearAdjacentTiles(newBoard, bottomCell.grid, params)
    } else {
      bottomCell.clicked = true
      newBoard[bottomCell.grid[0]][bottomCell.grid[1]] = bottomCell
    }
  }

  // ?? Clear Bottom Right Cell
  if (bottomRightCell) {
    if (!bottomRightCell.number) {
      clearAdjacentTiles(newBoard, bottomRightCell.grid, params)
    } else {
      bottomRightCell.clicked = true
      newBoard[bottomRightCell.grid[0]][bottomRightCell.grid[1]] = bottomRightCell
    }
  }
  
  return newBoard
}

export default clearAdjacentTiles