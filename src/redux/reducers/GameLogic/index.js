const INIT_STATE = {
  hasWon: null
}

export default (state = INIT_STATE, action) => {
  switch(action.type) {
    case 'GAME_WON':
      return {...state, hasWon: true}

    case 'RESET_HAS_WON':
      return {...state, hasWon: false}
    default:
      return state
  }
}