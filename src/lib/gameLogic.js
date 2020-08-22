const checkTileForBomb = (board, row, col) => {
    
  if (board[row][col]['bomb'] === true) {
    return true
  }

  return false
} 

const generateTileValue = (board, row, col) => {
  let numberOfBombs = 0;

  const adjacentCells = getAdjacentCells(board, row, col)
  
  // ?? Check top left corner
  if (adjacentCells.topLeftCell) {
    if (adjacentCells.topLeftCell.bomb) {
      numberOfBombs++
    }
  }

  // ?? Check top
  if (adjacentCells.topCell) {
    if (adjacentCells.topCell.bomb) {
      numberOfBombs++
    }
  }

  // ?? Check top right
  if (adjacentCells.topRightCell) {
    if (adjacentCells.topRightCell.bomb) {
      numberOfBombs++
    }
  }
  // ?? Check left
  if (adjacentCells.leftCell) {
    if (checkTileForBomb(board, row, col - 1)) {
      numberOfBombs++
    }
  }
  // ?? check right
  if (adjacentCells.rightCell) {
    if (checkTileForBomb(board, row, col + 1)) {
      numberOfBombs++
    }
  }
  // ?? check bottom left
  if (adjacentCells.bottomLeftCell) {
    if (checkTileForBomb(board, row + 1, col - 1)) {
      numberOfBombs++
    }
  }
  // ?? check bottom
  if (adjacentCells.bottomCell) {
    if (checkTileForBomb(board, row + 1, col)) {
      numberOfBombs++
    }
  }
  // ?? check bottom right
  if (adjacentCells.bottomRightCell) {
    if (checkTileForBomb(board, row + 1, col + 1)) {
      numberOfBombs++
    }
  }

  if (numberOfBombs === 0) {
    return null
  }

  return numberOfBombs
}

const generateRandomTile = () => {
  const row = Math.floor(Math.random() * 16)
  const column = Math.floor(Math.random() * 16)

  return [row, column]
}

const generateBomb = (board) => {
  let emptyTile = true;

  while (emptyTile === true) {
    const tile = generateRandomTile()
    const row = tile[0]
    const col = tile[1]
    
    if (board[row][col]['bomb'] === false) {
      board[row][col]['bomb'] = true
      emptyTile = false
    }
  }

}

const generateTiles = () => {
  const value = []

  // ?? Generate Tile Obj into row/col array
  for (let x = 0; x < 16; x++) {
    const tempArr = []
    for (let y = 0; y < 16; y++) {
      tempArr.push({
        grid: [x, y],
        bomb: false,
        number: 0,
        flagged: false,
        clicked: false,
        isFound: false
      })
    }
    value.push(tempArr)
  }

  

  // ?? Generate random bomb locations on board
  for (let bombs = 0; bombs < 40; bombs++) {
    generateBomb(value)
  }

  // ?? Generate number value for tiles
  for (let x = 0; x < 16; x++) {
    for (let y = 0; y < 16; y++) {
      if (!value[x][y]['bomb']) {
        value[x][y]['number'] = generateTileValue(value, x, y)
      }
      
    }
  }
  return value
}

const getAdjacentCells = (board, row, col) => {

  const topLeftCell = (row - 1 > -1 && col - 1 > -1) ? board[row - 1][col - 1] : null
  
  const topCell = row - 1 > -1 ? board[row - 1][col] : null
  
  const topRightCell = (row - 1 > -1 && col + 1 < 16) ? board[row - 1][col + 1] : null
  
  const leftCell = (col - 1 > -1) ? board[row][col - 1] : null
  
  const rightCell = (col + 1 < 16) ? board[row][col + 1] : null
  
  const bottomLeftCell = (row + 1 < 16 && col - 1 > -1) ? board[row + 1][col - 1] : null
  
  const bottomCell = (row + 1 < 16) ? board[row + 1][col] : null
  
  const bottomRightCell = (row + 1 < 16 && col + 1 < 16) ? board[row + 1][col + 1] : null

  return {
    topLeftCell,
    topCell,
    topRightCell,
    leftCell,
    rightCell,
    bottomLeftCell,
    bottomCell,
    bottomRightCell
  }
}

const clearAdjacentTiles = (board, cellCoords) => {
  console.log('clearing cells')
}

export default {
  clearAdjacentTiles,
  generateTiles
}