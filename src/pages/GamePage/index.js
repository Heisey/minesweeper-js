
// ????????????????????????????????????????????????????????????????
// ?????????????????????????? Game Page ???????????????????????????
// ????????????????????????????????????????????????????????????????

// ??????????????????????? Vendor Modules ?????????????????????????
import React, { useEffect, useState } from 'react';

// ???????????????????????? File Modules ??????????????????????????
// ?? Components
import GameBoard from '../../components/GameBoard';
import GameButton from '../../components/GameButton'
import InfoBox from '../../components/InfoBox'

// ?? Utility
import gameLogic from '../../lib/gameLogic'

// ?? Styles
import './GamePage.scss'

const GamePage = () => {

  const [bombsGuessed, bombsGuessedHandler] = useState(40)
  const [bombsLeft, bombsLeftHandler] = useState(40)
  const [gameBoard, gameBoardHandler] = useState([])
  const [gameStarted, gameStartedHandler] = useState(false)
  const [gameLost, gameLostHandler] = useState(false)
  const [score, setScore] = useState(0)
  const [time, timeHandler] = useState(0)

  

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

  useEffect(() => restartGame(), [])

  useEffect(() => {
    if (gameLost) {
      gameStartedHandler(false)
      const wrongGuessesPoints = bombsGuessed - bombsLeft * 5
      let finalScore = time + ((40 - bombsGuessed) * 10) - wrongGuessesPoints - 100

      if (finalScore < 0) {
        finalScore = 0
      }

      setScore(finalScore)


    }
  }, [gameLost, bombsGuessed, bombsLeft, time])

  const handleTileClick = (grid) => {

    if (!gameStarted) {
      gameStartedHandler(true)
    }

    let curGame = gameBoard.slice()

    const curCell = curGame[grid[0]][grid[1]]
    
    if (curCell.flagged) {
      return
    }


    if (curCell.bomb) {
      gameLostHandler(true)
    }

    if (curCell.number === null) {
      curGame = gameLogic.clearAdjacentTiles(curGame, curCell.grid)
    } else {
      curCell.clicked = true
    }


    curGame[grid[0]][grid[1]] = curCell

    gameBoardHandler(curGame)
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
    gameBoardHandler(gameLogic.generateTiles())
    gameStartedHandler(false)
  }

  return (
    <div className='GamePage'>
      <div className="GamePage__buttons">
        {/* // ?? Go Back to Main Menu */}
        <GameButton 
          icon="arrow-left"
        />

        {/* // ?? Restart Game */}
        <GameButton 
          icon="redo-alt"
          buttonClickEvent={restartGame}
        />

        {/* // ?? Show Game Instructions */}
        <GameButton 
          icon="question"
        />
      </div>

      <GameBoard 
        board={gameBoard}
        tileClickEvent={handleTileClick}
        flagTile={handleFlagTile}
      />

      <div className="GamePage__infoBoxes">
        {/* // ?? Mines Left */}
        <InfoBox 
          info={bombsLeft}
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