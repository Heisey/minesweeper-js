import { keys } from '../../'

export const gameWon = () => ({ type: keys.GAME_WON })

export const gameLost = () => ({ type: keys.GAME_LOST })

export const resetHasWon = () => ({ type: keys.RESET_HAS_WON })

export const gameTime = (time) => {

  return {
    type: keys.GAME_TIME,
    payload: time
  }
}