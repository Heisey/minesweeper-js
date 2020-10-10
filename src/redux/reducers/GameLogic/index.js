import { initState, keys } from '../../'

export default (state = initState, action) => {
  switch(action.type) {
    case keys.GAME_WON:
      return {...state, hasWon: true}

    case keys.GAME_LOST:
      return {...state, hasWon: false}

    case keys.RESET_HAS_WON:
      return {...state, hasWon: null}

    case keys.GAME_TIME:
      return {...state, time: action.payload}

    case keys.GAME_PARAMS:
      return {...state, gameParams: action.payload}

    default:
      return state
  }
}