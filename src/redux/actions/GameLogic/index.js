import { keys } from '../../'
import { gameLogic } from '../../../lib'

export const gameWon = () => ({ type: keys.GAME_WON })

export const gameLost = () => ({ type: keys.GAME_LOST })

export const resetHasWon = () => ({ type: keys.RESET_HAS_WON })

export const gameTime = (payload) => {
  return {
    type: keys.GAME_TIME,
    payload
  }
}

export const generateParams = (difficulty) => {
  const payload = gameLogic.generateGameParams(difficulty)
  return {
    type: 'GAME_PARAMS',
    payload
  }
}