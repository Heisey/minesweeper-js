
import { initState, keys } from '../../'

const INIT_STATE = {
  hasWon: null,
  time: 0
}

console.log('keys',keys)

export default (state = initState, action) => {
  console.log('puppy state',initState)
  switch(action.type) {
    case keys.GAME_WON:
      return {...state, hasWon: true}

    case keys.GAME_LOST:
      return {...state, hasWon: false}

    case keys.RESET_HAS_WON:
      return {...state, hasWon: null}

    case keys.GAME_TIME:
      return {...state, time: action.payload}

    default:
      return state
  }
}