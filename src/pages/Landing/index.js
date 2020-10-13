// ????????????????????????????????????????????????????????????????
// ?????????????????????????? Landing ?????????????????????????????
// ????????????????????????????????????????????????????????????????

// ??????????????????????? Vendor Modules ?????????????????????????
import React, { useState } from 'react'
import { connect } from 'react-redux'

// ???????????????????????? File Modules ??????????????????????????
// ?? redux
import { actions } from '../../redux'

// ?? Components
import { Buttons } from '../../components'
import MenuButton from '../../components/MenuButton'

// ?? Styles
import styles from './styles'
import Button from '../../components/Game/Button'

const Landing = (props) => {
  // ~~ Parent Props
  const { handleShowGame } = props

  // ~~ Redux Props
  const { generateParams } = props

  // ~~ contained component state
  const [primaryGameMenu, primaryGameMenuHandler] = useState(true)
  const [difficultyGameMenu, difficultyGameMenuHandler] = useState(false)

  // ~~ State Handlers
  const handlePrimaryGameMenu = () => {
    primaryGameMenuHandler(false)

    setTimeout(() => {
      difficultyGameMenuHandler(true)
    }, 300)
  }

  const handleHardGame = () => {
    handleShowGame()
    generateParams('hard')
  }

  const handleMediumGame = () => {
    handleShowGame()
    generateParams('medium')
  }

  const handleEasyGame = () => {
    handleShowGame()
    generateParams('easy')
  }

  return (
    <styles.Landing>
    {/* <SkyScraper /> */}
      <styles.LandingGameMenuButton
        end={primaryGameMenu}
      >
        <Buttons.Main 
          text='PLAY'
          clickHandler={handlePrimaryGameMenu}
        />
        {/* <MenuButton 
          clickHandler={handlePrimaryGameMenu}
          text='start'
        /> */}
      </styles.LandingGameMenuButton>
    
      <styles.LandingScoreMenuButton
        end={primaryGameMenu}
      >
        <Buttons.Main 
          text="scores"
        />
        {/* <MenuButton 
          text='scores'
          clickHandler={() => 'need to do something'}
        /> */}
      </styles.LandingScoreMenuButton>

      {difficultyGameMenu && (
        <>
          <styles.LandingGameMenuEasyButton>
            <Buttons.Main 
              text='easy'
              clickHandler={handleEasyGame}
            />
            {/* <MenuButton 
              text='easy'
              clickHandler={handleEasyGame}
            /> */}
          </styles.LandingGameMenuEasyButton>

          <styles.LandingGameMenuMediumButton>
            <Buttons.Main
              text='medium'
              clickHandler={handleMediumGame}
            />
            {/* <MenuButton 
              text='medium'
              clickHandler={handleMediumGame}
            /> */}
          </styles.LandingGameMenuMediumButton>

          <styles.LandingGameMenuHardButton
            end={primaryGameMenu}
          >
            <Buttons.Main
              text='hard'
              clickHandler={handleHardGame} 
            />
            {/* <MenuButton 
              text='hard'
              clickHandler={handleHardGame}
            /> */}
          </styles.LandingGameMenuHardButton>
        </>
      )}
    </styles.Landing>
  )
}

export default connect(null, {
  generateParams: actions.generateParams
})(Landing)