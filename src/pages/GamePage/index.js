
// ????????????????????????????????????????????????????????????????
// ?????????????????????????? Game Page ???????????????????????????
// ????????????????????????????????????????????????????????????????

// ??????????????????????? Vendor Modules ?????????????????????????
import React, { useEffect, useState } from 'react';

// ???????????????????????? File Modules ??????????????????????????
// ?? Components
import GameBoard from '../../components/GameBoard'
import GameButton from '../../components/GameButton'
import GameScore from '../../components/GameScore'
import InfoBox from '../../components/InfoBox'

// ?? Utility
import gameLogic from '../../lib/gameLogic'

// ?? Styles
import './GamePage.scss'

const GamePage = (props) => {

  const { handleShowLanding, gameParams, difficulty } = props

  console.log(difficulty)

  // const gameParams = gameLogic.generateGameParams(difficulty)
  
  const [bombsGuessed, bombsGuessedHandler] = useState(40)
  const [bombsLeft, bombsLeftHandler] = useState(40)
  const [gameBoard, gameBoardHandler] = useState([])
  const [gameStarted, gameStartedHandler] = useState(false)
  const [gameLost, gameLostHandler] = useState(false)
  const [gameWon, gameWonHandler] = useState(false)
  const [time, timeHandler] = useState(0)


  // const [gameParams, gameParamsHandler] = useState(gameLogic.generateGameParams(difficulty))
  

  useEffect(() => {
    const timeIntervals = {}
    if (gameStarted) {
      timeIntervals['gameTime'] = setInterval(() => {
        timeHandler(time + 1)
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
    if (gameLost) {
      gameStartedHandler(false)
    }
  }, [gameLost])

  useEffect(() => {
    if (gameWon) {
      alert("game won")
    }
  }, [gameWon])

  const showAllBombs = () => {
    const tempBoard = gameBoard.slice()

    return tempBoard.map(row => {
      return row.map(cell => {
        if (cell.bomb && !cell.flagged) {
          cell.clicked = true
          return cell
        }

        return cell
      })
    })
  }

  const calcScore = (bGuessed, bLeft, time) => {
    const wrongGuessesPoints = bGuessed - bLeft * 5
    
    let finalScore = ((40 - bombsGuessed) * 10) - wrongGuessesPoints - (time * 2)

    if (finalScore < 0) {
      finalScore = 0
    }
    return finalScore
  }

  const handleTileClick = (grid) => {
    
    let curGame = gameBoard.slice()

    if (!gameStarted) {
      let isBomb = curGame[grid[0]][grid[1]]
      while (isBomb) {
        curGame = gameLogic.generateTiles(gameParams)
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
      gameBoardHandler(showAllBombs())
      gameLostHandler(true)

      return 
    }

    if (curCell.number === null) {
      curGame = gameLogic.clearAdjacentTiles(curGame, curCell.grid, gameParams)
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

    gameWonHandler(testForWin.every(tile => tile === true))
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
      alert('game won')
      console.log('game won')
    }
  }

  const restartGame = () => {
    gameBoardHandler(gameLogic.generateTiles(gameParams))
    gameStartedHandler(false)
    timeHandler(0)
    gameLostHandler(false)
    gameWonHandler(false)
    bombsGuessedHandler(40)
    bombsLeftHandler(40)
  }

  return (
    <div className='GamePage'>
      {gameWon && (
        <GameScore 
          calcScore={() => calcScore(bombsGuessed, bombsLeft, time)}
        />
      )}
      {gameLost && <GameScore 
          calcScore={() => calcScore(bombsGuessed, bombsLeft, time)}
      />}
      <div className="GamePage__buttons">
        {/* // ?? Go Back to Main Menu */}
        <GameButton 
          icon="arrow-left"
          buttonClickEvent={handleShowLanding}
        />

        {/* // ?? Restart Game */}
        <GameButton 
          icon="redo-alt"
          buttonClickEvent={restartGame}
        />

        {/* // ?? Show Game Instructions */}
        {/* <GameButton 
          icon="question"
        /> */}
      </div>

      <GameBoard 
        difficulty={difficulty}
        board={gameBoard}
        tileClickEvent={handleTileClick}
        flagTile={handleFlagTile}
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

export default GamePage