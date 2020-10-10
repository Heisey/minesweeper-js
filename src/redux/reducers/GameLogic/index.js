const INIT_STATE = {
  hasWon: null,
  time: 0
}

export default (state = INIT_STATE, action) => {
  switch(action.type) {
    case 'GAME_WON':
      return {...state, hasWon: true}

    case 'RESET_HAS_WON':
      return {...state, hasWon: false}

    case 'GAME_TIME':
      return {...state, time: action.payload}
    default:
      return state
  }
}