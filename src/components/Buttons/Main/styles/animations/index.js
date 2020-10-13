import {keyframes} from 'styled-components'

export const bottomLeftAnimate = keyframes`
  0% {
    left: -1px;
    bottom: -1rem;
  }

  50% {
    left: -3px;
    bottom: -1.5rem
  }

  100% {
    left: -1px;
    bottom: -1rem;
  }
`

export const topRightAnimate = keyframes`
  0% {
    right: 5px;
    top: -1.8rem;
  }

  50% {
    right: 2px;
    top: -2.3rem;
  }

  100% {
    right: 5px;
    top: -1.8rem;
  }
`