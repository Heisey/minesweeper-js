
// ????????????????????????????????????????????????????????????????
// ?????????????????????????? Game Page ???????????????????????????
// ????????????????????????????????????????????????????????????????

// ??????????????????????? Vendor Modules ?????????????????????????
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'

// ???????????????????????? File Modules ??????????????????????????
// ?? redux
import { actions } from '../../redux'

// ?? Components
import { Game, Score } from '../../components' 
import InfoBox from '../../components/InfoBox'

// ?? Utility
import { gameLogic, scoreLogic } from '../../lib'

// ?? Styles
import styles from './styles'

const GamePage = (props) => {

  const { handleShowLanding } = props

  const {
    gameBoard,
    gameLost,
    gameParams,
    gameTime,
    gameWon,
    generateBoard,
    hasWon,
    resetHasWon,
    time,
    updateBoard
  } = props
  
  const [bombsGuessed, bombsGuessedHandler] = useState(gameParams.bombs)
  const [bombsLeft, bombsLeftHandler] = useState(gameParams.bombs)

  
  // ~~ contained component state
  const [gameStarted, gameStartedHandler] = useState(false)

  useEffect(() => {
    const timeIntervals = {}
    if (gameStarted) {
      timeIntervals['gameTime'] = setInterval(() => {
        gameTime(time + 1)
      }, 1000)

      return () => {
        clearInterval(timeIntervals.gameTime)
      }
    } 
  }, [gameTime, gameStarted, time])

  useEffect(() => {
    generateBoard(gameParams)
  }, [gameParams, generateBoard])

  useEffect(() => {
    if (hasWon !== null) {
      gameStartedHandler(false)
    }
  }, [hasWon])

  const handleTileClick = (grid, board, params) => {
    
    let curGame = board.slice()

    if (!gameStarted) {
      let isBomb = curGame[grid[0]][grid[1]]
      while (isBomb) {
        curGame = gameLogic.generateTiles(params)
        if (!curGame[grid[0]][grid[1]].bomb) {
          isBomb = false
          break
        }
      }
      gameStartedHandler(true)
    }

    const curCell = curGame[grid[0]][grid[1]]
    
    if (curCell.flagged) {
      return
    }

    if (curCell.bomb) {
      curCell.clicked = true
      curCell.exploded = true
      updateBoard(gameLogic.showAllBombs(board))
      gameLost()
      return 
    }

    if (curCell.number === null) {
      curGame = gameLogic.clearAdjacentTiles(curGame, curCell.grid, params)
    } else {
      curCell.clicked = true
    }

    curGame[grid[0]][grid[1]] = curCell

    updateBoard(curGame)

    const testForWin = []
    
    curGame.forEach(row => {
      row.forEach(cell => {
        if (cell.clicked || cell.bomb) {
          testForWin.push(true)
        } else {
          testForWin.push(false)
        }
      })
    })
    if (testForWin.every(tile => tile === true)) {
      gameWon()
    }
  }

// ~~ NEEDS TO BE REFACTORED IN TO GAMELOGIC
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

  const restartGame = () => {
    generateBoard(gameParams)
    gameStartedHandler(false)
    gameTime(0)
    resetHasWon()

    bombsGuessedHandler(gameParams.bombs)
    bombsLeftHandler(gameParams.bombs)
  }

  return (
    <styles.GamePage>
      {hasWon && (
        <Score
          pointsScored={scoreLogic.calcScore(bombsGuessed, bombsLeft, time)}
          restartGame={restartGame}
        />
      )}
      {hasWon && <Game.Score 
          calcScore={() => scoreLogic.calcScore(bombsGuessed, bombsLeft, time)}
      />}
      <styles.GamePageButtons>
        {/* // ?? Go Back to Main Menu */}
        <Game.Button 
          icon="arrow-left"
          buttonClickEvent={handleShowLanding}
        />

        {/* // ?? Restart Game */}
        <Game.Button 
          icon="redo-alt"
          buttonClickEvent={restartGame}
        />

        {/* // ?? Show Game Instructions */}
        {/* <GameButton 
          icon="question"
        /> */}
      </styles.GamePageButtons>

      <Game.Board 
        board={gameBoard}
        tileClickEvent={handleTileClick}
        flagTile={handleFlagTile}
      />

      <styles.GamePageInfoBoxes>
        {/* // ?? Mines Left */}
        <InfoBox 
          info={bombsLeft}
          isBomb={true}
        />

        {/* // ?? Time Accumulated */}
        <InfoBox 
          info={time}
        />
      </styles.GamePageInfoBoxes>
    </styles.GamePage>
  )
}

const mapStateTopProps = state => {
  return {
    gameBoard: state.gameLogic.gameBoard,
    hasWon: state.gameLogic.hasWon,
    time: state.gameLogic.time,
    gameParams: state.gameLogic.gameParams
  }
}

export default connect(mapStateTopProps, {
  gameWon: actions.gameWon,
  gameLost: actions.gameLost,
  gameTime: actions.gameTime,
  generateBoard: actions.generateBoard,
  resetHasWon: actions.resetHasWon,
  updateBoard: actions.updateBoard
})(GamePage)