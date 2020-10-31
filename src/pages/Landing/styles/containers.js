import styled from 'styled-components/macro'
import animations from '../animations'
import utilities from '../utilities'

const menuButtonBase = styled.div`
  position: absolute;
  transition: all;
  transition-delay: 0.3s;
  animation-name: ${props => !utilities.checkForEndProp(props.end) && animations.gameButtonAnimation};
  animation-duration: ${props => !utilities.checkForEndProp(props.end) && '0.4s'};
  animation-fill-mode: ${props => !utilities.checkForEndProp(props.end) && 'backwards'};
  transform: ${props => !utilities.checkForEndProp(props.end) && 'translateX(-50%)'};
  opacity: ${props => !utilities.checkForEndProp(props.end) && '0'};
`

 const difficultButtonBase = styled.div`
  position: absolute;
  top: 40%;
  transform: scale(0.7);
  animation-name: ${animations.gameButtonAnimation};
  animation-duration: 1s;
`

export default {
  menuButtonBase,
  difficultButtonBase
}