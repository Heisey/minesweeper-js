// ~~ NEEDS TO BE REFACTORED

const handleFlagTile = (tileCoords) => {
  const updatedBoard = gameBoard.slice();

  const tile = updatedBoard[tileCoords[0]][tileCoords[1]]

  tile.flagged = !tile.flagged

  let tempBombsGuessed = null;
  let tempBombsLeft = null

  if (tile.flagged && tile.bomb) {
    tile.isFound = true

    tempBombsGuessed = bombsGuessed - 1
    bombsGuessedHandler(() => bombsGuessed - 1)

    tempBombsLeft = bombsLeft - 1
    bombsLeftHandler(() => bombsLeft - 1)

  } else if (!tile.flagged && tile.bomb) {
    tile.isFound = false
    
    tempBombsGuessed = bombsGuessed + 1
    bombsGuessedHandler(() => bombsGuessed + 1)
    
    tempBombsLeft = bombsLeft + 1
    bombsLeftHandler(() => bombsLeft + 1)
  }
  updatedBoard[tileCoords[0]][tileCoords[1]] = tile

  updateBoard(updatedBoard)

  if (tempBombsGuessed === 0 && tempBombsLeft === 0) {
    gameWon()
  }
}