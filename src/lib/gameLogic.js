const checkTileForBomb = (board, row, col) => {
    
  if (board[row][col]['bomb'] === true) {
    return true
  }

  return false
} 

const generateTileValue = (board, row, col) => {
  let numberOfBombs = 0;
  
  // ?? Check top left corner
  if (row - 1 > -1 && col - 1 > -1) {
    if (checkTileForBomb(board, row - 1, col - 1)) {
      numberOfBombs++
    }
  }
  // ?? Check top
  if (row - 1 > -1) {
    if (checkTileForBomb(board, row - 1, col)) {
      numberOfBombs++
    }
  }
  // ?? Check top right
  if (row - 1 > -1 && col + 1 < 16) {
    if (checkTileForBomb(board, row - 1, col + 1)) {
      numberOfBombs++
    }
  }
  // ?? Check left
  if (col - 1 > -1) {
    if (checkTileForBomb(board, row, col - 1)) {
      numberOfBombs++
    }
  }
  // ?? check right
  if (col + 1 < 16) {
    if (checkTileForBomb(board, row, col + 1)) {
      numberOfBombs++
    }
  }
  // ?? check bottom left
  if (row + 1 < 16 && col - 1 > -1) {
    if (checkTileForBomb(board, row + 1, col - 1)) {
      numberOfBombs++
    }
  }
  // ?? check bottom
  if (row + 1 < 16) {
    if (checkTileForBomb(board, row + 1, col)) {
      numberOfBombs++
    }
  }
  // ?? check bottom right
  if (row + 1 < 16 && col + 1 < 16) {
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


export default {
  generateTiles
}