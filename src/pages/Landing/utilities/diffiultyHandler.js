import {actions} from '../../../redux'

export const handleHardGame = () => {
  actions.generateParams('hard')
}

export const handleMediumGame = () => {
  actions.generateParams('medium')
}

export const handleEasyGame = () => {
  actions.generateParams('easy')
}
