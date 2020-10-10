
// ????????????????????????????????????????????????????????????????
// ?????????????????????????? Game Page ???????????????????????????
// ????????????????????????????????????????????????????????????????

// ??????????????????????? Vendor Modules ?????????????????????????
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'

// ???????????????????????? File Modules ??????????????????????????
// ?? redux
import {actions } from '../../redux'
// ?? Components
import { Game, Score } from '../../components' 
import InfoBox from '../../components/InfoBox'

// ?? Utility
import { gameLogic } from '../../lib'

// ?? Styles
import './GamePage.scss'

const GamePage = (props) => {

  const { handleShowLanding, gameParams, difficulty } = props

  const {
    gameLost,
    gameTime,
    gameWon,
    hasWon,
    resetHasWon,
    time
  } = props
  
  const [bombsGuessed, bombsGuessedHandler] = useState(gameParams.bombs)
  const [bombsLeft, bombsLeftHandler] = useState(gameParams.bombs)
  const [gameBoard, gameBoardHandler] = useState([])
  const [gameStarted, gameStartedHandler] = useState(false)
  // const [time, timeHandler] = useState(0)

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
  }, [gameStarted, time])

  useEffect(() => {
    gameBoardHandler(gameLogic.generateTiles(gameParams))
  }, [gameParams])

  useEffect(() => {
    if (hasWon !== null) {
      gameStartedHandler(false)
    }
  }, [hasWon])

  const calcScore = (bGuessed, bLeft, time) => {
    const wrongGuessesPoints = bGuessed - bLeft * 5
    
    let finalScore = ((40 - bGuessed) * 10) - wrongGuessesPoints - (time * 2)

    if (finalScore < 0) {
      finalScore = 0
    }
    return finalScore
  }

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
      gameBoardHandler(gameLogic.showAllBombs(board))
      gameLost()
      return 
    }

    if (curCell.number === null) {
      curGame = gameLogic.clearAdjacentTiles(curGame, curCell.grid, params)
    } else {
      curCell.clicked = true
    }

    curGame[grid[0]][grid[1]] = curCell

    gameBoardHandler(curGame)

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

    gameBoardHandler(() => updatedBoard)

    if (tempBombsGuessed === 0 && tempBombsLeft === 0) {
      console.log('test')
      gameWon()
    }
  }

  const restartGame = () => {
    gameBoardHandler(gameLogic.generateTiles(gameParams))
    gameStartedHandler(false)
    gameTime(0)
    resetHasWon()

    bombsGuessedHandler(gameParams.bombs)
    bombsLeftHandler(gameParams.bombs)
  }

  return (
    <div className='GamePage'>
      {hasWon && (
        <Score
          pointsScored={calcScore(bombsGuessed, bombsLeft, time)}
          restartGame={restartGame}
        />
      )}
      {hasWon && <Game.Score 
          calcScore={() => calcScore(bombsGuessed, bombsLeft, time)}
      />}
      <div className="GamePage__buttons">
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
      </div>

      <Game.Board 
        difficulty={difficulty}
        board={gameBoard}
        tileClickEvent={handleTileClick}
        flagTile={handleFlagTile}
        params={gameParams}
      />

      <div className="GamePage__infoBoxes">
        {/* // ?? Mines Left */}
        <InfoBox 
          info={bombsLeft}
          isBomb={true}
        />

        {/* // ?? Time Accumulated */}
        <InfoBox 
          info={time}
        />
      </div>
    </div>
  )
}

const mapStateTopProps = state => {
  return {
    hasWon: state.gameLogic.hasWon,
    time: state.gameLogic.time
  }
}

export default connect(mapStateTopProps, {
  gameWon: actions.gameWon,
  gameLost: actions.gameLost,
  gameTime: actions.gameTime,
  resetHasWon: actions.resetHasWon
})(GamePage)