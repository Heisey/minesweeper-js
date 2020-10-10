

export const gameWon = () => ({ type: 'GAME_WON' })

export const gameLost = () => ({ type: 'GAME_LOST' })

export const resetHasWon = () => ({ type: 'RESET_HAS_WON' })

export const gameTime = (time) => {

  return {
    type: 'GAME_TIME',
    payload: time
  }
}