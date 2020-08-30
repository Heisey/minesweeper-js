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
  } = getAdjacentCells(board, row, col, params)
  
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

const generateRandomTile = (params) => {
  const row = Math.floor(Math.random() * params.rows)
  const column = Math.floor(Math.random() * params.cols)

  return [row, column]
}

const generateBomb = (params, board) => {
  let emptyTile = true;

  while (emptyTile === true) {
    const tile = generateRandomTile(params)
    const row = tile[0]
    const col = tile[1]
    
    if (board[row][col]['bomb'] === false) {
      board[row][col]['bomb'] = true
      emptyTile = false
    }
  }

}

const generateGameParams = (difficulty) => {
  const gameParams = {}

  if (difficulty === 'medium') {
    gameParams.rows = 16
    gameParams.cols = 16
    gameParams.bombs = 40
  } else if (difficulty === 'hard') {
    gameParams.rows = 30
    gameParams.cols = 16
    gameParams.bombs = 99
  } else {
    gameParams.rows = 9
    gameParams.cols = 9
    gameParams.bombs = 10
  }

  return gameParams
}

const generateTiles = (params) => {
  const value = []
  

  // ?? Generate Tile Obj into row/col array
  for (let x = 0; x < params.rows; x++) {
    const tempArr = []
    for (let y = 0; y < params.cols; y++) {
      tempArr.push({
        grid: [x, y],
        bomb: false,
        number: 0,
        flagged: false,
        clicked: false,
        isFound: false,
        exploded: false
      })
    }
    value.push(tempArr)
  }

  

  // ?? Generate random bomb locations on board
  for (let bombs = 0; bombs < params.bombs; bombs++) {
    generateBomb(params, value)
  }
  
  // ?? Generate number value for tiles
  for (let x = 0; x < params.rows; x++) {
    for (let y = 0; y < params.cols; y++) {
      if (!value[x][y]['bomb']) {
        value[x][y]['number'] = generateTileValue(value, x, y, params)
      }
      
    }
  }
  
  return value
}

const getAdjacentCells = (board, row, col, params) => {
  console.log('params', params)

  const topLeftCell = (row - 1 > -1 && col - 1 > -1) ? board[row - 1][col - 1] : null
  
  const topCell = row - 1 > -1 ? board[row - 1][col] : null
  
  const topRightCell = (row - 1 > -1 && col + 1 < params.cols) ? board[row - 1][col + 1] : null
  
  const leftCell = (col - 1 > -1) ? board[row][col - 1] : null
  
  const rightCell = (col + 1 < params.cols) ? board[row][col + 1] : null
  
  const bottomLeftCell = (row + 1 < params.rows && col - 1 > -1) ? board[row + 1][col - 1] : null
  
  const bottomCell = (row + 1 < params.rows) ? board[row + 1][col] : null
  
  const bottomRightCell = (row + 1 < params.rows && col + 1 < 16) ? board[row + 1][col + 1] : null

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

const clearAdjacentTiles = (board, cellCoords, params) => {
  const newBoard = board.slice()

  const curCell = newBoard[cellCoords[0]][cellCoords[1]]

  if (curCell.flagged || curCell.clicked) {
    return 
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
  } = getAdjacentCells(board, cellCoords[0], cellCoords[1], params)

  curCell.clicked = true

  // ?? Clear Top Left Cell
  if (topLeftCell) {
    if (!topLeftCell.number) {
      clearAdjacentTiles(newBoard, topLeftCell.grid)
    } else {
      topLeftCell.clicked = true
      newBoard[topLeftCell.grid[0]][topLeftCell.grid[1]] = topLeftCell
    }
  }

  // // ?? Clear Top Cell
  if (topCell) {
    if (!topCell.number) {
      clearAdjacentTiles(newBoard, topCell.grid)
    } else {
      topCell.clicked = true
      newBoard[topCell.grid[0]][topCell.grid[1]] = topCell
    }
  }
  
  // ?? Clear Top Right Cell
  if (topRightCell) {
    if (!topRightCell.number) {
      clearAdjacentTiles(newBoard, topRightCell.grid)
    } else {
      topRightCell.clicked = true
      newBoard[topRightCell.grid[0]][topRightCell.grid[1]] = topRightCell
    }
  }
  
  // ?? Clear Left Cell
  if (leftCell) {
    if (!leftCell.number) {
      clearAdjacentTiles(newBoard, leftCell.grid)
    } else {
      leftCell.clicked = true
      newBoard[leftCell.grid[0]][leftCell.grid[1]] = leftCell
    }
  }
  
  // ?? Clear Right Cell
  if (rightCell) {
    if (!rightCell.number) {
      clearAdjacentTiles(newBoard, rightCell.grid)
    } else {
      rightCell.clicked = true
      newBoard[rightCell.grid[0]][rightCell.grid[1]] = rightCell
    }
  }
  
  // ?? Clear Bottom Left Cell
  if (bottomLeftCell) {
    if (!bottomLeftCell.number) {
      clearAdjacentTiles(newBoard, bottomLeftCell.grid)
    } else {
      bottomLeftCell.clicked = true
      newBoard[bottomLeftCell.grid[0]][bottomLeftCell.grid[1]] = bottomLeftCell
    }
  }
  
  // ?? Clear Bottom Cell
  if (bottomCell) {
    if (!bottomCell.number) {
      clearAdjacentTiles(newBoard, bottomCell.grid)
    } else {
      bottomCell.clicked = true
      newBoard[bottomCell.grid[0]][bottomCell.grid[1]] = bottomCell
    }
  }

  // ?? Clear Bottom Right Cell
  if (bottomRightCell) {
    if (!bottomRightCell.number) {
      clearAdjacentTiles(newBoard, bottomRightCell.grid)
    } else {
      bottomRightCell.clicked = true
      newBoard[bottomRightCell.grid[0]][bottomRightCell.grid[1]] = bottomRightCell
    }
  }
  
  return newBoard
}



export default {
  clearAdjacentTiles,
  generateTiles,
  generateGameParams
}