import styled from 'styled-components/macro'
import containers from './containers'

const Landing = styled.div`
height: 100%;
width: 40%;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-around;
position: relative;
font-size: 30px;
`

const LandingGameMenuButton = styled(containers.menuButtonBase)`
  bottom: 45%;
  left: -20%;
`

const LandingScoreMenuButton = styled(containers.menuButtonBase)`
  bottom: 45%;
  right: -20%;
`

const LandingGameMenuEasyButton = styled(containers.difficultButtonBase)`
  left: -30%;
`

const LandingGameMenuMediumButton = styled(containers.difficultButtonBase)``

const LandingGameMenuHardButton = styled(containers.difficultButtonBase)`
  right: -30%;
`

export default {
  Landing,
  LandingGameMenuButton,
  LandingScoreMenuButton,
  LandingGameMenuEasyButton,
  LandingGameMenuMediumButton,
  LandingGameMenuHardButton
}