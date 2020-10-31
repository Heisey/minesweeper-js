import styled, { keyframes } from 'styled-components'
import animations from '../../animations'

const scoreButtonAnimation = keyframes`
  0% {
    right: 0;
    opacity: 1;
  }

  100% {
    display: none;
  }
`

const gameEasyButtonAnimation = keyframes`
  0% {
    opacity: 0;
    top: 50%;
  }

  // 25% {
  //   opacity: 0.5;
  // }

  // 40% {
  //   top: 35%;
  // }

  50% {
    opacity: 1;
  }

  80% {
    top: 20%;
  }

  100% {
    top: 25%;
  }
`

const checkForEndProp = prop => {
  if (prop === 'true') {
    return true
  }

  return false
}

export const Landing = styled.div`
  height: 100%;
  width: 40%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  font-size: 30px;
`

export const LandingGameMenuButton = styled.div`
  position: absolute;
  transition: all;
  transition-delay: 0.3s;
  bottom: 45%;
  left: -20%;
  animation-name: ${props => !checkForEndProp(props.end) && animations.gameButtonAnimation};
  animation-duration: ${props => !checkForEndProp(props.end) && '0.4s'};
  animation-fill-mode: ${props => !checkForEndProp(props.end) && 'backwards'};
  transform: ${props => !checkForEndProp(props.end) && 'translateX(-50%)'};
  opacity: ${props => !checkForEndProp(props.end) && '0'};
`

export const LandingScoreMenuButton = styled.div`
  position: absolute;
  transition: all;
  transition-delay: 0.3s;
  bottom: 45%;
  right: -20%;
  animation-name: ${props => !props.end && animations.gameButtonAnimation};
  animation-duration: ${props => !props.end && '0.4s'};
  animation-fill-mode: ${props => !props.end && 'backwards'};
  transform: ${props => !props.end && 'translateX(-50%)'};
  opacity: ${props => !props.end && '0'};
`

export const LandingGameMenuEasyButton = styled.div`
  position: absolute;
  left: -30%;
  top: 40%;
  transform: scale(0.7);
  animation-name: ${animations.gameButtonAnimation};
  animation-duration: 1s;
`

export const LandingGameMenuMediumButton = styled.div`
  position: absolute;
  top: 40%;
  transform: scale(0.7);
  animation-name: ${animations.gameButtonAnimation};
  animation-duration: 1s;
`

export const LandingGameMenuHardButton = styled.div`
  position: absolute;
  top: 40%;
  right: -30%;
  transform: scale(0.7);
  animation-name: ${animations.gameButtonAnimation};
  animation-duration: 1s;
`